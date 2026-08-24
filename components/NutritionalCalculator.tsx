
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ArrowRight, ArrowLeft, Sparkles, Calculator, CheckCircle2, Zap, Heart, ChevronDown, UtensilsCrossed, X, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Species = 'dog';
type Step = 1 | 2 | 3 | 4;

interface PetProfile {
  name: string;
  species: Species;
  weight: number;
  age: string;
  size: string;
  activityLevel: string;
  isNeutered: boolean;
  allergies: string[];
  selectedPlan: string;
}

interface MealPlan {
  id: string;
  name: string;
  protein: string;
  proteinLabel: string;
  emoji: string;
  ingredients: string;
  allergenKeywords: string[];
}

// ─── Ingredientes completos extraídos da planilha (Página 2) ───────────────
const ADULT_PLANS: MealPlan[] = [
  {
    id: 'frangolino',
    name: 'Frangolino',
    protein: 'frango',
    proteinLabel: '🐔 Frango',
    emoji: '🐔',
    ingredients: 'Peito de Frango, Fígado de Frango, Arroz integral, Abobrinha, Cenoura, Gengibre, Salsinha, Farelo de Aveia, Sal Rosa do Himalaia, Óleo de Canola e Food Dog Basic.',
    allergenKeywords: [
      'frango', 'ave', 'aves', 'galinha', 'peito de frango', 'fígado de frango',
      'arroz', 'arroz integral', 'abobrinha', 'cenoura', 'gengibre', 'salsinha',
      'farelo de aveia', 'aveia', 'sal rosa', 'óleo de canola', 'canola',
    ],
  },
  {
    id: 'nemo',
    name: 'Procurando Nemo',
    protein: 'peixe',
    proteinLabel: '🐟 Peixe',
    emoji: '🐟',
    ingredients: 'Tilápia, Arroz branco, Batata doce, Couve-Flor, Chuchu, Alecrim, Salsinha, Sal Rosa do Himalaia, Óleo de Canola, Óleo de Girassol e Food Dog Basic.',
    allergenKeywords: [
      'peixe', 'tilapia', 'tilápia', 'pescado', 'frutos do mar',
      'arroz', 'arroz branco', 'batata doce', 'batata', 'couve flor', 'couve-flor', 'couve',
      'chuchu', 'alecrim', 'salsinha', 'sal rosa', 'óleo de canola', 'canola', 'óleo de girassol', 'girassol',
    ],
  },
  {
    id: 'musculo',
    name: 'Mr. Músculo',
    protein: 'boi',
    proteinLabel: '🐂 Boi',
    emoji: '💪',
    ingredients: 'Músculo Bovino, Moela de Frango, Arroz integral, Inhame, Beterraba, Abóbora Moranga, Sal Rosa do Himalaia, Alecrim, Cúrcuma, Óleo de Canola, Óleo de Girassol e Food Dog Basic.',
    allergenKeywords: [
      'boi', 'bovino', 'bovinos', 'carne bovina', 'carne vermelha', 'vaca', 'músculo bovino',
      'moela', 'moela de frango', 'frango',
      'arroz', 'arroz integral', 'inhame', 'beterraba', 'abóbora', 'moranga',
      'alecrim', 'cúrcuma', 'curcuma', 'sal rosa', 'óleo de canola', 'canola', 'óleo de girassol', 'girassol',
    ],
  },
  {
    id: 'baby',
    name: 'Baby o Porquinho',
    protein: 'porco',
    proteinLabel: '🐷 Porco',
    emoji: '🐷',
    ingredients: 'Lombo Suíno, Arroz branco, Batata doce, Chuchu, Brócolis, Tomilho, Manjericão, Sal Rosa do Himalaia, Óleo de Canola, Óleo de Girassol e Food Dog Basic.',
    allergenKeywords: [
      'porco', 'suino', 'suíno', 'carne suína', 'carne suina', 'lombo suíno', 'lombo',
      'arroz', 'arroz branco', 'batata doce', 'batata', 'chuchu', 'brócolis', 'brocolis',
      'tomilho', 'manjericão', 'manjericao', 'sal rosa', 'óleo de canola', 'canola', 'óleo de girassol', 'girassol',
    ],
  },
];

const SENIOR_PLANS: MealPlan[] = [
  {
    id: 'sr-musculo',
    name: 'Sr. Músculo',
    protein: 'boi',
    proteinLabel: '🐂 Boi',
    emoji: '💪',
    ingredients: 'Músculo bovino, Coração bovino, Lentilha, Batata doce, Beterraba, Couve-flor, Couve manteiga, Óleo de girassol, Óleo de linhaça, Sal rosa do Himalaia, Farelo de aveia, Gengibre, Alecrim desidratado, Food Dog Sênior.',
    allergenKeywords: [
      'boi', 'bovino', 'bovinos', 'carne bovina', 'carne vermelha', 'vaca', 'músculo bovino',
      'coração bovino', 'coracao bovino',
      'lentilha', 'batata doce', 'batata', 'beterraba', 'couve flor', 'couve-flor', 'couve', 'couve manteiga',
      'óleo de girassol', 'girassol', 'óleo de linhaça', 'linhaça', 'linhaca',
      'sal rosa', 'farelo de aveia', 'aveia', 'gengibre', 'alecrim',
    ],
  },
  {
    id: 'sr-frangolino',
    name: 'Sr. Frangolino',
    protein: 'frango',
    proteinLabel: '🐔 Frango',
    emoji: '🐔',
    ingredients: 'Peito de Frango, Fígado de Frango, Quinoa, Inhame, Cenoura, Abobrinha, Brócolis, Salsinha, Cúrcuma, Farelo de Aveia, Sal Rosa do Himalaia, Óleo de Linhaça, Óleo de Girassol e Food Dog Sênior.',
    allergenKeywords: [
      'frango', 'ave', 'aves', 'galinha', 'peito de frango', 'fígado de frango',
      'quinoa', 'inhame', 'cenoura', 'abobrinha', 'brócolis', 'brocolis',
      'salsinha', 'cúrcuma', 'curcuma', 'farelo de aveia', 'aveia',
      'sal rosa', 'óleo de linhaça', 'linhaça', 'linhaca', 'óleo de girassol', 'girassol',
    ],
  },
];

// Ingredientes comuns a todos os planos (não vale a pena filtrar por eles, pois bloqueiam tudo)
const COMMON_INGREDIENTS_FOR_ALL = [
  'sal', 'sal rosa', 'sal refinado', 'food dog', 'óleo',
];

// Lista de sugestões de alergias para o seletor de chips
const ALLERGY_SUGGESTIONS = [
  { label: 'Frango', value: 'frango' },
  { label: 'Bovino / Boi', value: 'bovino' },
  { label: 'Porco / Suíno', value: 'suíno' },
  { label: 'Peixe / Tilápia', value: 'peixe' },
  { label: 'Arroz', value: 'arroz' },
  { label: 'Batata doce', value: 'batata doce' },
  { label: 'Aveia', value: 'aveia' },
  { label: 'Brócolis', value: 'brócolis' },
  { label: 'Cenoura', value: 'cenoura' },
  { label: 'Beterraba', value: 'beterraba' },
  { label: 'Chuchu', value: 'chuchu' },
  { label: 'Inhame', value: 'inhame' },
  { label: 'Couve-flor', value: 'couve flor' },
  { label: 'Abobrinha', value: 'abobrinha' },
  { label: 'Gengibre', value: 'gengibre' },
  { label: 'Cúrcuma', value: 'cúrcuma' },
  { label: 'Alecrim', value: 'alecrim' },
  { label: 'Lentilha', value: 'lentilha' },
  { label: 'Girassol', value: 'girassol' },
  { label: 'Linhaça', value: 'linhaça' },
  { label: 'Canola', value: 'canola' },
  { label: 'Quinoa', value: 'quinoa' },
];

function normalizeStr(s: string) {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function getAvailablePlans(selectedAllergies: string[], planList: MealPlan[]): MealPlan[] {
  if (!selectedAllergies.length) return planList;
  const normalizedAllergies = selectedAllergies.map(normalizeStr);
  return planList.filter(plan => {
    return !plan.allergenKeywords.some(kw => {
      const kwNorm = normalizeStr(kw);
      return normalizedAllergies.some(a => kwNorm.includes(a) || a.includes(kwNorm));
    });
  });
}

const AGE_OPTIONS = ['Filhote (até 1 ano)', 'Adulto (1-7 anos)', 'Senior (7+ anos)'];
function getSizeFromWeight(w: number): string {
  if (w <= 5) return 'Mini (até 5kg)';
  if (w <= 10) return 'Pequeno (5-10kg)';
  if (w <= 25) return 'Médio (10-25kg)';
  return 'Grande (25-45kg)';
}
const ACTIVITY_OPTIONS = [
  { label: 'Sedentário', desc: 'Passeios curtos', value: 'sedentary' },
  { label: 'Moderado', desc: 'Passeios diários', value: 'moderate' },
  { label: 'Ativo', desc: 'Exercícios intensos', value: 'active' },
  { label: 'Muito Ativo', desc: 'Trabalho, competição', value: 'very_active' },
];

function getBodyPercent(ageGroup: string, activity: string, weight: number, isNeutered: boolean): number {
  const isFilhote = ageGroup.includes('Filhote');
  const isSenior = ageGroup.includes('Senior');
  const isAdult = ageGroup.includes('Adulto');

  let pct = 3.5;

  if (isAdult) {
    if (activity === 'sedentary') {
      pct = weight <= 5 ? 2.5 : weight >= 25 ? 2.0 : 2.25;
    } else if (activity === 'moderate') {
      pct = weight <= 5 ? 4.0 : weight >= 25 ? 3.0 : 3.5;
    } else { // active or very_active
      pct = weight <= 5 ? 6.0 : weight >= 25 ? 5.0 : 5.5;
    }
  } else if (isSenior) {
    if (activity === 'sedentary') {
      pct = 2.0;
    } else if (activity === 'moderate') {
      pct = weight <= 5 ? 3.0 : weight >= 25 ? 2.5 : 2.75;
    } else { // active or very_active
      pct = weight <= 5 ? 4.0 : weight >= 25 ? 3.5 : 3.75;
    }
  } else if (isFilhote) {
    if (activity === 'sedentary') {
      pct = weight <= 5 ? 7.0 : weight >= 25 ? 6.0 : 6.5;
    } else if (activity === 'moderate') {
      pct = weight <= 5 ? 9.0 : weight >= 25 ? 8.0 : 8.5;
    } else { // active or very_active
      pct = 10.0;
    }
  }

  if (isNeutered) {
    pct = pct * 0.9;
  }

  return Math.round(pct * 100) / 100;
}

interface KitOption {
  id: string;
  name: string;
  description: string;
  priceFormula: (dailyPortion: number) => { original: number; discounted: number };
}

const getKitsForStage = (ageGroup: string): KitOption[] => {
  const isSenior = ageGroup.includes('Senior');
  const isFilhote = ageGroup.includes('Filhote');

  if (isSenior) {
    return [
      {
        id: 'frango',
        name: 'Kit Sênior Frango',
        description: '30 dias de Frango Sênior',
        priceFormula: (dp) => {
          const val = (dp / 250) * 450;
          return { original: Math.round(val), discounted: Math.round(val * 0.9) };
        }
      },
      {
        id: 'carne',
        name: 'Kit Sênior Carne',
        description: '30 dias de Bovino Sênior',
        priceFormula: (dp) => {
          const val = (dp / 250) * 600;
          return { original: Math.round(val), discounted: Math.round(val * 0.9) };
        }
      },
      {
        id: 'f_c',
        name: 'Kit Sênior Misto (F+C)',
        description: '15d Frango Sênior + 15d Bovino Sênior',
        priceFormula: (dp) => {
          const val = (dp / 250) * 525;
          return { original: Math.round(val), discounted: Math.round(val * 0.9) };
        }
      }
    ];
  }

  if (isFilhote) {
    return [
      {
        id: 'frango',
        name: 'Kit Filhote Frango',
        description: '30 dias de Frango Filhote',
        priceFormula: (dp) => {
          const val = (dp / 250) * 450;
          return { original: Math.round(val), discounted: Math.round(val * 0.9) };
        }
      },
      {
        id: 'carne',
        name: 'Kit Filhote Carne',
        description: '30 dias de Bovino Filhote',
        priceFormula: (dp) => {
          const val = (dp / 250) * 600;
          return { original: Math.round(val), discounted: Math.round(val * 0.9) };
        }
      },
      {
        id: 'f_c',
        name: 'Kit Filhote Misto (F+C)',
        description: '15d Frango Filhote + 15d Bovino Filhote',
        priceFormula: (dp) => {
          const val = (dp / 250) * 525;
          return { original: Math.round(val), discounted: Math.round(val * 0.9) };
        }
      }
    ];
  }

  // Adulto
  return [
    {
      id: 'completo',
      name: 'Kit Adulto Completo',
      description: 'Todas as proteínas (8d Frango, 8d Lombo, 8d Bovino, 6d Peixe)',
      priceFormula: (dp) => {
        const val = (dp / 250) * 452;
        return { original: Math.round(val), discounted: Math.round(val * 0.9) };
      }
    },
    {
      id: 'f_c_l',
      name: 'Kit Adulto Misto (F+C+L)',
      description: 'Três proteínas (10d Frango, 10d Bovino, 10d Lombo)',
      priceFormula: (dp) => {
        const val = (dp / 250) * 400;
        return { original: Math.round(val), discounted: Math.round(val * 0.9) };
      }
    },
    {
      id: 'f_c',
      name: 'Kit Adulto Misto (F+C)',
      description: 'Duas proteínas (15d Frango, 15d Bovino)',
      priceFormula: (dp) => {
        const val = (dp / 250) * 375;
        return { original: Math.round(val), discounted: Math.round(val * 0.9) };
      }
    },
    {
      id: 'f_l',
      name: 'Kit Adulto Misto (F+L)',
      description: 'Duas proteínas (15d Frango, 15d Lombo)',
      priceFormula: (dp) => {
        const val = (dp / 250) * 390;
        return { original: Math.round(val), discounted: Math.round(val * 0.9) };
      }
    }
  ];
};

function calculateNutrition(p: PetProfile) {
  const pct = getBodyPercent(p.age, p.activityLevel, p.weight, p.isNeutered);
  const dailyG = Math.round(pct * p.weight * 10);
  const monthKg = Math.round((dailyG * 30) / 1000 * 10) / 10;

  const rer = 70 * Math.pow(p.weight, 0.75);
  let actMul = p.activityLevel === 'sedentary' ? 1.4 : p.activityLevel === 'moderate' ? 1.6 : p.activityLevel === 'active' ? 1.8 : 2.5;
  let ageMul = p.age.includes('Filhote') ? 2.5 : p.age.includes('Senior') ? 0.85 : 1;
  let neutMul = p.isNeutered ? 0.9 : 1;
  const dailyCal = Math.round(rer * actMul * ageMul * neutMul);

  const priceRac = Math.round(p.weight * 15 + 120);
  const vetSave = Math.round(220 + (p.weight * 6));

  const prios: string[] = [];
  if (p.age.includes('Filhote')) { prios.push('DHA para desenvolvimento cerebral', 'Cálcio/Fósforo para ossos', 'Proteína elevada'); }
  else if (p.age.includes('Senior')) { prios.push('Glucosamina para articulações', 'Antioxidantes para imunidade', 'Fibras digestivas'); }
  else { prios.push('Proteína de alta biodisponibilidade', 'Ômega 3 e 6 para pelagem', 'Fibras prebióticas'); }
  if (p.allergies.length > 0) prios.push(`Fórmula sem: ${p.allergies.join(', ')}`);

  return { dailyCal, dailyG, monthKg, priceRac, vetSave, prios, pct };
}

const initialProfile: PetProfile = { name: '', species: 'dog', weight: 10, age: '', size: '', activityLevel: '', isNeutered: false, allergies: [], selectedPlan: '' };

interface NutritionalCalculatorProps {
  degustationKit?: 'kit_degust_150' | 'kit_degust_250' | null;
  clearDegustationKit?: () => void;
}

export const NutritionalCalculator: React.FC<NutritionalCalculatorProps> = ({
  degustationKit,
  clearDegustationKit
}) => {
  const [step, setStep] = useState<Step>(1);
  const [profile, setProfile] = useState<PetProfile>(initialProfile);
  const [isVisible, setIsVisible] = useState(false);
  const [sendingState, setSendingState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [tutorName, setTutorName] = useState('');
  const [tutorPhone, setTutorPhone] = useState('');
  const [chosenOption, setChosenOption] = useState<'cardapio_personalizado' | 'pronta_entrega' | 'kit_degust_150' | 'kit_degust_250' | null>(null);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedKitId, setSelectedKitId] = useState<string>('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (degustationKit) {
      setStep(4);
      setChosenOption(degustationKit);
      setShowLeadForm(true);
      if (clearDegustationKit) {
        clearDegustationKit();
      }
    }
  }, [degustationKit, clearDegustationKit]);

  // Auto-select first kit on entering step 4
  useEffect(() => {
    if (step === 4) {
      const kits = getKitsForStage(profile.age);
      if (kits.length > 0) {
        setSelectedKitId(kits[0].id);
      }
    }
  }, [step, profile.age]);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const isAdult = profile.age.includes('Adulto');
  const isSenior = profile.age.includes('Senior');
  const isFilhote = profile.age.includes('Filhote');
  const hasPlans = isAdult || isSenior;
  const currentPlanList = isSenior ? SENIOR_PLANS : ADULT_PLANS;
  const availablePlans = useMemo(() => getAvailablePlans(profile.allergies, currentPlanList), [profile.allergies, currentPlanList]);

  const toggleAllergy = (value: string) => {
    setProfile(prev => {
      const already = prev.allergies.includes(value);
      const next = already ? prev.allergies.filter(a => a !== value) : [...prev.allergies, value];
      return { ...prev, allergies: next, selectedPlan: '' };
    });
  };

  // Auto-select plan when only one is available
  useEffect(() => {
    if (hasPlans && availablePlans.length === 1) {
      setProfile(prev => ({ ...prev, selectedPlan: availablePlans[0].id }));
    } else if (hasPlans && availablePlans.length > 1 && profile.selectedPlan) {
      if (!availablePlans.find(p => p.id === profile.selectedPlan)) {
        setProfile(prev => ({ ...prev, selectedPlan: '' }));
      }
    }
  }, [hasPlans, availablePlans, profile.selectedPlan]);

  const canGo = () => {
    if (step === 1) return profile.name.trim() !== '';
    if (step === 2) return profile.weight > 0 && profile.age !== '';
    if (step === 3) {
      if (!profile.activityLevel) return false;
      if (hasPlans && availablePlans.length > 1 && !profile.selectedPlan) return false;
      if (hasPlans && availablePlans.length === 0) return false;
      return true;
    }
    return true;
  };

  const formatPhone = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 3) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    }
    if (phoneNumberLength < 11) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`;
    }
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhone(e.target.value);
    setTutorPhone(formattedValue);
  };

  const handleCtaSubmit = async () => {
    if (!chosenOption) return;
    setSendingState('sending');
    const allPlans = [...ADULT_PLANS, ...SENIOR_PLANS];
    const selectedPlanData = allPlans.find(p => p.id === profile.selectedPlan);
    const result = calculateNutrition(profile);

    // Retrieve selected kit name and prices
    const kits = getKitsForStage(profile.age);
    const currentKit = kits.find(k => k.id === selectedKitId) || kits[0];

    const isDegust = chosenOption.startsWith('kit_degust_');
    const finalKitName = chosenOption === 'kit_degust_150'
      ? 'Kit Degustação 150g'
      : chosenOption === 'kit_degust_250'
        ? 'Kit Degustação 250g'
        : (currentKit ? currentKit.name : 'Cardápio Personalizado');

    const kitPrices = currentKit ? currentKit.priceFormula(result.dailyG) : null;
    const finalPrice = chosenOption === 'kit_degust_150'
      ? 40
      : chosenOption === 'kit_degust_250'
        ? 60
        : (kitPrices ? kitPrices.discounted : 0);

    const payload = {
      nome_pet: isDegust ? 'Degustação' : (profile.name || 'Sem nome'),
      peso: isDegust ? 0 : profile.weight,
      porte: isDegust ? 'N/A' : (profile.size || getSizeFromWeight(profile.weight)),
      faixa_etaria: isDegust ? 'N/A' : (profile.age || 'N/A'),
      nivel_atividade: isDegust ? 'N/A' : (profile.activityLevel || 'N/A'),
      alergias: isDegust ? 'N/A' : (profile.allergies.length > 0 ? profile.allergies.join(', ') : 'Nenhuma'),
      allergies_list: isDegust ? [] : profile.allergies,
      proteina: isDegust ? 'N/A' : (selectedPlanData ? selectedPlanData.protein : ''),
      castrado: isDegust ? false : profile.isNeutered,
      opcao: chosenOption,
      nome_tutor: tutorName,
      telefone: tutorPhone,
      plano_recomandado: finalKitName,
      plano_recomendado: finalKitName,
      kcal_dia: isDegust ? 0 : result.dailyCal,
      porção_dia: isDegust ? 0 : result.dailyG,
      kg_mes: isDegust ? 0 : result.monthKg,
      preco_kit: finalPrice
    };

    try {
      const response = await fetch('https://webhook.shiftbrothers.com.br/webhook/forms_site_cozinhapet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSendingState('success');
      } else {
        setSendingState('error');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
      setSendingState('error');
    }
  };

  const result = step === 4 ? calculateNutrition(profile) : null;
  const allPlans = [...ADULT_PLANS, ...SENIOR_PLANS];
  const selectedPlanData = allPlans.find(p => p.id === profile.selectedPlan);
  const lineLabel = isSenior ? 'Linha Sênior' : 'Linha Adulto';

  return (
    <section id="calculadora" ref={ref} className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-sage/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-redLight text-brand-red px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-6 border border-brand-red/10">
            <Calculator size={14} /> Calculadora de Vitalidade
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-4 leading-tight">
            Descubra o plano ideal <br className="hidden sm:block" /><span className="italic text-brand-red">para o seu pet</span>
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">Em menos de 1 minuto, nosso algoritmo nutricional gera um Plano a pronta entrega.</p>
        </div>

        {/* Progress */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-between mb-3">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-500 ${s <= step ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' : 'bg-neutral-100 text-neutral-400'}`}>
                  {s < step ? <CheckCircle2 size={16} /> : s}
                </div>
                {s < 4 && <div className="w-12 sm:w-20 md:w-28 h-1 mx-1 md:mx-2 rounded-full bg-neutral-100 overflow-hidden"><div className={`h-full bg-brand-blue rounded-full transition-all duration-700 ${s < step ? 'w-full' : 'w-0'}`}></div></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-brand-cream/50 rounded-3xl p-6 md:p-10 border border-neutral-200/50 shadow-sm min-h-[400px]">
            {step === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-xl md:text-2xl font-serif text-neutral-900 mb-2">Como se chama seu melhor amigo?</h3>
                <p className="text-neutral-500 text-sm mb-8">Vamos criar um plano personalizado só para ele.</p>
                <div className="mb-8">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Nome do Pet</label>
                  <input type="text" value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} placeholder="Ex: Thor, Luna, Mel..." className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all placeholder:text-neutral-300" id="pet-name-input" />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-xl md:text-2xl font-serif text-neutral-900 mb-2">Conte mais sobre <span className="text-brand-red italic">{profile.name}</span></h3>
                <p className="text-neutral-500 text-sm mb-8">Essas informações calibram o plano nutricional.</p>
                <div className="mb-8">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Peso: <span className="text-brand-blue text-base font-serif normal-case">{profile.weight} kg</span></label>
                  <input type="range" min="1" max="80" value={profile.weight} onChange={(e) => { const w = Number(e.target.value); setProfile({ ...profile, weight: w, size: getSizeFromWeight(w) }); }} className="w-full" id="weight-slider" />
                  <div className="flex justify-between text-[10px] text-neutral-400 mt-1"><span>1 kg</span><span>80 kg</span></div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Porte detectado:</span>
                    <span className="text-xs font-semibold text-brand-blue bg-brand-blueLight/50 px-3 py-1 rounded-full border border-brand-blue/20">{getSizeFromWeight(profile.weight)}</span>
                  </div>
                </div>
                <div className="mb-8">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">Faixa Etária</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {AGE_OPTIONS.map(a => <button key={a} onClick={() => setProfile({ ...profile, age: a, selectedPlan: '' })} className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${profile.age === a ? 'border-brand-blue bg-brand-blueLight/50 text-brand-blue' : 'border-neutral-200 bg-white text-neutral-600 hover:border-brand-blue/30'}`}>{a}</button>)}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in">
                <h3 className="text-xl md:text-2xl font-serif text-neutral-900 mb-2">Estilo de vida de <span className="text-brand-red italic">{profile.name}</span></h3>
                <p className="text-neutral-500 text-sm mb-8">Atividade e restrições alimentares moldam o plano.</p>
                <div className="mb-8">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">Nível de Atividade</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {ACTIVITY_OPTIONS.map(o => <button key={o.value} onClick={() => setProfile({ ...profile, activityLevel: o.value })} className={`px-4 py-4 rounded-xl border text-left transition-all ${profile.activityLevel === o.value ? 'border-brand-blue bg-brand-blueLight/50 shadow-md' : 'border-neutral-200 bg-white hover:border-brand-blue/30'}`}><span className={`font-bold text-sm block ${profile.activityLevel === o.value ? 'text-brand-blue' : 'text-neutral-700'}`}>{o.label}</span><span className="text-xs text-neutral-500">{o.desc}</span></button>)}
                  </div>
                </div>
                {/* Allergy chip selector */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">
                    Alergias ou Restrições
                    <span className="ml-2 normal-case font-normal text-neutral-400">(selecione os ingredientes que seu pet não pode consumir)</span>
                  </label>

                  {/* Selected chips */}
                  <AnimatePresence>
                    {profile.allergies.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex flex-wrap gap-2 mb-3"
                      >
                        {profile.allergies.map(a => (
                          <motion.button
                            key={a}
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.7 }}
                            onClick={() => toggleAllergy(a)}
                            className="flex items-center gap-1.5 bg-brand-red/10 text-brand-red border border-brand-red/20 px-3 py-1.5 rounded-full text-xs font-semibold"
                          >
                            {ALLERGY_SUGGESTIONS.find(s => s.value === a)?.label ?? a}
                            <X size={12} />
                          </motion.button>
                        ))}
                        {profile.allergies.length > 0 && (
                          <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onClick={() => setProfile(prev => ({ ...prev, allergies: [], selectedPlan: '' }))}
                            className="text-[10px] text-neutral-400 hover:text-neutral-600 underline underline-offset-2 px-1"
                          >
                            limpar tudo
                          </motion.button>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Suggestion chips */}
                  <div className="flex flex-wrap gap-2">
                    {ALLERGY_SUGGESTIONS.map(s => {
                      const isSelected = profile.allergies.includes(s.value);
                      return (
                        <motion.button
                          key={s.value}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.93 }}
                          onClick={() => toggleAllergy(s.value)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                            isSelected
                              ? 'bg-brand-red text-white border-brand-red'
                              : 'bg-white text-neutral-600 border-neutral-200 hover:border-brand-red/40 hover:text-brand-red'
                          }`}
                        >
                          {s.label}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Protein preference select - for adult/senior pets with multiple available plans */}
                {hasPlans && availablePlans.length > 1 && (
                  <div className="mb-6 animate-fade-in">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Proteína Preferida</label>
                    <div className="relative">
                      <select
                        value={profile.selectedPlan}
                        onChange={(e) => setProfile({ ...profile, selectedPlan: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all appearance-none cursor-pointer"
                        id="protein-select"
                      >
                        <option value="">Selecione a proteína principal...</option>
                        {availablePlans.map(plan => (
                          <option key={plan.id} value={plan.id}>{plan.proteinLabel} — {plan.name}</option>
                        ))}
                      </select>
                      <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                    </div>
                  </div>
                )}

                {/* Auto-selected plan message */}
                {hasPlans && availablePlans.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-brand-sageLight/50 rounded-xl border border-brand-sage/20"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{availablePlans[0].emoji}</span>
                      <div>
                        <p className="text-sm font-semibold text-brand-sageDark">Plano recomendado automaticamente</p>
                        <p className="text-xs text-neutral-600">Com base nas restrições, o plano ideal é o <strong>{availablePlans[0].name}</strong></p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* No plans available — full custom message */}
                <AnimatePresence>
                  {hasPlans && availablePlans.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 8 }}
                      transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                      className="mb-6 p-5 bg-amber-50 rounded-2xl border border-amber-200/80 shadow-sm"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <span className="text-2xl flex-shrink-0">😔</span>
                        <div>
                          <p className="text-sm font-bold text-amber-800 mb-1">Nenhum cardápio disponível</p>
                          <p className="text-xs text-amber-700 leading-relaxed">
                            Infelizmente nenhum dos nossos cardápios prontos atende seu companheiro. Entre em contato diretamente com uma de nossas nutricionistas parceiras para montar um cardápio exclusivo.
                          </p>
                        </div>
                      </div>
                      <motion.a
                        href="#parceiros"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center justify-center gap-2 w-full bg-brand-sage text-white py-3 rounded-xl font-bold text-sm transition-colors hover:bg-brand-sageDark shadow-md"
                      >
                        <Users size={16} /> Ver Nutricionistas Parceiras
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-neutral-200">
                  <input type="checkbox" id="neutered-check" checked={profile.isNeutered} onChange={(e) => setProfile({ ...profile, isNeutered: e.target.checked })} className="w-5 h-5 rounded" />
                  <label htmlFor="neutered-check" className="text-sm text-neutral-700 font-medium cursor-pointer">{profile.name} é castrado(a)</label>
                </div>
              </div>
            )}

            {step === 4 && result && (
              <div className="animate-fade-in">
                {sendingState === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
                    <svg className="checkmark-wrap" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                      <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                      <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                    <h4 className="text-2xl font-serif text-neutral-900 mt-4 mb-2 font-bold">Enviado com sucesso!</h4>
                    <p className="text-sm text-neutral-700 leading-relaxed max-w-md">
                      {chosenOption?.startsWith('kit_degust_') ? (
                        <>
                          Seu pedido para o <strong>{chosenOption === 'kit_degust_150' ? 'Kit Degustação 150g' : 'Kit Degustação 250g'}</strong> foi recebido! Nossa equipe entrará em contato com você pelo WhatsApp no número <strong>{tutorPhone}</strong> em instantes.
                        </>
                      ) : (
                        <>
                          As informações de <strong>{profile.name}</strong> foram recebidas. Nossa equipe entrará em contato com você pelo WhatsApp no número <strong>{tutorPhone}</strong> em instantes!
                        </>
                      )}
                    </p>
                  </div>
                ) : showLeadForm ? (
                  <div className="animate-fade-in">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 bg-brand-blueLight text-brand-blue px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4">
                        <Sparkles size={14} /> Quase lá!
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif text-neutral-900">
                        {chosenOption?.startsWith('kit_degust_')
                          ? `Pedir ${chosenOption === 'kit_degust_150' ? 'Kit Degustação 150g' : 'Kit Degustação 250g'}`
                          : `Salvar Plano de ${profile.name}`}
                      </h3>
                      <p className="text-neutral-500 text-sm mt-1">
                        {chosenOption?.startsWith('kit_degust_')
                          ? 'Insira seus dados para receber as instruções de pagamento e entrega.'
                          : 'Insira seus dados para receber o orçamento detalhado.'}
                      </p>
                    </div>

                    <div className="space-y-5 mb-8">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Seu Nome</label>
                        <input
                          type="text"
                          value={tutorName}
                          onChange={(e) => setTutorName(e.target.value)}
                          placeholder="Ex: Lucas Silva"
                          className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-base font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">Seu WhatsApp</label>
                        <input
                          type="tel"
                          value={tutorPhone}
                          onChange={handlePhoneChange}
                          placeholder="Ex: (11) 99999-9999"
                          className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white text-neutral-900 text-base font-medium focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3">
                      <button
                        onClick={handleCtaSubmit}
                        disabled={sendingState === 'sending' || tutorName.trim().length < 2 || tutorPhone.replace(/[^\d]/g, '').length < 10}
                        className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-emerald-700 transition-all shadow-xl hover:shadow-emerald-600/30 flex items-center justify-center gap-3 group active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {sendingState === 'sending' ? 'Enviando...' : 'Finalizar e Enviar'}
                        {sendingState !== 'sending' && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                      </button>

                      <button
                        onClick={() => {
                          setShowLeadForm(false);
                          setSendingState('idle');
                          if (chosenOption?.startsWith('kit_degust_')) {
                            setStep(1);
                            setChosenOption(null);
                          }
                        }}
                        disabled={sendingState === 'sending'}
                        className="w-full bg-transparent border border-neutral-200 text-neutral-600 py-3 rounded-2xl font-semibold text-sm hover:bg-neutral-50 transition-all text-center"
                      >
                        {chosenOption?.startsWith('kit_degust_') ? 'Voltar ao Início' : 'Voltar para o Plano'}
                      </button>
                    </div>

                    {sendingState === 'error' && (
                      <p className="text-center text-xs text-brand-red font-semibold mt-2">
                        Ocorreu um erro ao enviar. Por favor, tente novamente.
                      </p>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 bg-brand-sageLight text-brand-sageDark px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4"><Sparkles size={14} /> Plano Gerado</div>
                      <h3 className="text-2xl md:text-3xl font-serif text-neutral-900">Plano de Vitalidade para <span className="text-brand-red italic">{profile.name}</span></h3>
                    </div>

                    {/* Filhote - personalized order message */}
                    {isFilhote && (
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200/50 mb-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <span className="text-4xl">🐾</span>
                          <div className="flex-1">
                            <h5 className="text-lg font-serif text-neutral-900 font-bold mb-2">Cardápio Personalizado para Filhote</h5>
                            <p className="text-sm text-neutral-600 leading-relaxed">Para filhotes, cada pedido é preparado de forma <strong>100% personalizada</strong> pelo nosso time de nutrição veterinária, respeitando as necessidades específicas de crescimento de <strong>{profile.name}</strong>.</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Recommended Plan Card - for adult/senior pets */}
                    {hasPlans && selectedPlanData && (
                      <div className="bg-gradient-to-br from-brand-cream to-white rounded-2xl p-5 border border-brand-sage/20 mb-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <UtensilsCrossed size={16} className="text-brand-sage" />
                          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Plano Recomendado — {lineLabel}</h4>
                        </div>
                        <div className="flex items-start gap-4">
                          <span className="text-4xl">{selectedPlanData.emoji}</span>
                          <div className="flex-1">
                            <h5 className="text-lg font-serif text-neutral-900 font-bold mb-1">{selectedPlanData.name}</h5>
                            <p className="text-xs text-neutral-500 leading-relaxed">{selectedPlanData.ingredients}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
                      <div className="bg-white rounded-2xl p-4 text-center border border-neutral-100 shadow-sm"><div className="text-2xl md:text-3xl font-serif text-brand-blue">{result.dailyCal}</div><div className="text-[10px] md:text-xs text-neutral-500 mt-1">kcal/dia</div></div>
                      <div className="bg-white rounded-2xl p-4 text-center border border-neutral-100 shadow-sm"><div className="text-2xl md:text-3xl font-serif text-brand-blue">{result.dailyG}g</div><div className="text-[10px] md:text-xs text-neutral-500 mt-1">porção/dia</div></div>
                      <div className="bg-white rounded-2xl p-4 text-center border border-neutral-100 shadow-sm"><div className="text-2xl md:text-3xl font-serif text-brand-blue">{result.monthKg}kg</div><div className="text-[10px] md:text-xs text-neutral-500 mt-1">por mês</div></div>
                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-neutral-100 mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4 flex items-center gap-2"><Zap size={14} className="text-brand-sage" /> Nutrientes Prioritários</h4>
                      <div className="space-y-3">{result.prios.map((p, i) => <div key={i} className="flex items-start gap-3"><CheckCircle2 size={16} className="text-brand-sage flex-shrink-0 mt-0.5" /><span className="text-sm text-neutral-700">{p}</span></div>)}</div>
                    </div>

                    {/* Pre-budget Warning Note */}
                    <div className="bg-brand-cream/80 border border-brand-earth/10 rounded-2xl p-4 text-neutral-700 text-xs mb-6 leading-relaxed flex gap-2.5 items-start">
                      <span className="text-base flex-shrink-0">⚠️</span>
                      <p>
                        A porção corporal calculada é de <strong>{result.pct}%</strong> baseada no estilo de vida de <strong>{profile.name}</strong>. Os valores abaixo são um <strong>pré-orçamento estimado</strong> e podem variar conforme a disponibilidade de estoque.
                      </p>
                    </div>

                    {/* Kits List Selection */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-2">
                        📋 Escolha o Kit Mensal:
                      </h4>
                      <div className="space-y-3">
                        {getKitsForStage(profile.age).map((kit) => {
                          const prices = kit.priceFormula(result.dailyG);
                          const isSelected = selectedKitId === kit.id;
                          return (
                            <div
                              key={kit.id}
                              onClick={() => setSelectedKitId(kit.id)}
                              className={`cursor-pointer rounded-2xl p-4 border transition-all flex justify-between items-center ${isSelected
                                  ? 'border-brand-blue bg-brand-blueLight/30 shadow-md ring-1 ring-brand-blue/30'
                                  : 'border-neutral-200 bg-white hover:border-brand-blue/30'
                                }`}
                            >
                              <div className="pr-2 text-left">
                                <span className="font-bold text-sm text-neutral-850 block">{kit.name}</span>
                                <span className="text-xs text-neutral-500 block mt-0.5">{kit.description}</span>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <span className="text-xs text-neutral-400 line-through block">R$ {prices.original}</span>
                                <span className="text-sm md:text-base font-serif font-bold text-brand-blue block">
                                  R$ {prices.discounted}
                                  <span className="ml-1 text-[9px] font-sans font-medium text-brand-sage uppercase bg-brand-sageLight px-1 py-0.5 rounded">10% OFF</span>
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    {isFilhote ? (
                      <button
                        onClick={() => { setChosenOption('cardapio_personalizado'); setShowLeadForm(true); document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                        className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-emerald-700 transition-all shadow-xl hover:shadow-emerald-600/30 flex items-center justify-center gap-3 group active:scale-[0.98]"
                        id="custom-plan-cta"
                      >
                        <Sparkles size={20} /> Solicitar Cardápio Personalizado <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    ) : (
                      <div className="flex flex-col gap-3">
                        <button
                          onClick={() => { setChosenOption('cardapio_personalizado'); setShowLeadForm(true); document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                          className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-emerald-700 transition-all shadow-2xl hover:shadow-emerald-600/30 flex items-center justify-center gap-3 group active:scale-[0.98] ring-2 ring-emerald-400/30 ring-offset-2"
                          id="custom-plan-cta"
                        >
                          <Sparkles size={20} /> Cardápio Personalizado <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                          onClick={() => { setChosenOption('pronta_entrega'); setShowLeadForm(true); document.getElementById('calculadora')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                          className="w-full bg-brand-red text-white py-4 rounded-2xl font-bold text-sm md:text-base hover:bg-brand-redDark transition-all shadow-lg hover:shadow-brand-red/20 flex items-center justify-center gap-3 group active:scale-[0.98]"
                          id="activate-plan-cta"
                        >
                          <Heart size={18} fill="white" /> Pedido a Pronta Entrega <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {step < 4 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200/50">
                {step > 1 ? <button onClick={() => setStep((step - 1) as Step)} className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800 font-medium text-sm transition-colors"><ArrowLeft size={16} /> Voltar</button> : <div></div>}
                <button onClick={() => canGo() && setStep((step + 1) as Step)} disabled={!canGo()} className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all ${canGo() ? 'bg-brand-blue text-white hover:bg-brand-blueDark shadow-lg active:scale-95' : 'bg-neutral-100 text-neutral-300 cursor-not-allowed'}`} id="calc-next-btn">Continuar <ArrowRight size={16} /></button>
              </div>
            )}
            {step === 4 && <div className="flex justify-center mt-6"><button onClick={() => { setStep(1); setProfile(initialProfile); setSendingState('idle'); setTutorName(''); setTutorPhone(''); setChosenOption(null); setShowLeadForm(false); setSelectedKitId(''); }} className="text-neutral-400 hover:text-neutral-600 font-medium text-xs transition-colors underline underline-offset-4">Calcular para outro pet</button></div>}
          </div>
        </div>
      </div>
    </section>
  );
};
