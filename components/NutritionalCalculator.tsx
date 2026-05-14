
import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Sparkles, Calculator, CheckCircle2, Zap, Shield, Heart } from 'lucide-react';

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
}

const ALLERGY_OPTIONS = ['Frango', 'Carne Bovina', 'Glúten', 'Laticínios', 'Soja', 'Milho', 'Nenhuma'];
const AGE_OPTIONS = ['Filhote (até 1 ano)', 'Adulto (1-7 anos)', 'Senior (7+ anos)'];
const SIZE_OPTIONS = ['Mini (até 5kg)', 'Pequeno (5-10kg)', 'Médio (10-25kg)', 'Grande (25-45kg)'];
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

function calculateNutrition(p: PetProfile) {
  const rer = 70 * Math.pow(p.weight, 0.75);
  let actMul = p.activityLevel === 'sedentary' ? 1.4 : p.activityLevel === 'moderate' ? 1.6 : p.activityLevel === 'active' ? 1.8 : 2.5;
  let ageMul = p.age.includes('Filhote') ? 2.5 : p.age.includes('Senior') ? 0.85 : 1;
  let neutMul = p.isNeutered ? 0.9 : 1;
  const dailyCal = Math.round(rer * actMul * ageMul * neutMul);
  const dailyG = Math.round(dailyCal / 1.8);
  const monthKg = Math.round((dailyG * 30) / 1000 * 10) / 10;
  // Degressive pricing per kg
  let priceCoz: number;
  if (monthKg <= 5) priceCoz = Math.round(monthKg * 36);
  else if (monthKg <= 12) priceCoz = Math.round(5 * 36 + (monthKg - 5) * 26);
  else priceCoz = Math.round(5 * 36 + 7 * 26 + (monthKg - 12) * 20);
  priceCoz = Math.max(priceCoz, 189);
  const priceRac = Math.round(p.weight * 15 + 120);
  const vetSave = Math.round(220 + (p.weight * 6));
  const prios: string[] = [];
  if (p.age.includes('Filhote')) { prios.push('DHA para desenvolvimento cerebral', 'Cálcio/Fósforo para ossos', 'Proteína elevada'); }
  else if (p.age.includes('Senior')) { prios.push('Glucosamina para articulações', 'Antioxidantes para imunidade', 'Fibras digestivas'); }
  else { prios.push('Proteína de alta biodisponibilidade', 'Ômega 3 e 6 para pelagem', 'Fibras prebióticas'); }
  if (p.allergies.length > 0 && !p.allergies.includes('Nenhuma')) prios.push(`Fórmula sem ${p.allergies.join(', ')}`);
  return { dailyCal, dailyG, monthKg, priceCoz, priceRac, vetSave, prios };
}

export const NutritionalCalculator: React.FC = () => {
  const [step, setStep] = useState<Step>(1);
  const [profile, setProfile] = useState<PetProfile>({ name: '', species: 'dog', weight: 10, age: '', size: '', activityLevel: '', isNeutered: false, allergies: [] });
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setIsVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const canGo = () => {
    if (step === 1) return profile.name.trim() !== '';
    if (step === 2) return profile.weight > 0 && profile.age !== '';
    if (step === 3) return profile.activityLevel !== '';
    return true;
  };

  const toggleAllergy = (a: string) => {
    if (a === 'Nenhuma') { setProfile({ ...profile, allergies: ['Nenhuma'] }); return; }
    const f = profile.allergies.filter(x => x !== 'Nenhuma');
    setProfile({ ...profile, allergies: f.includes(a) ? f.filter(x => x !== a) : [...f, a] });
  };

  const result = step === 4 ? calculateNutrition(profile) : null;

  return (
    <section id="calculadora" ref={ref} className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-sage/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
      <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-redLight text-brand-red px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-6 border border-brand-red/10">
            <Calculator size={14} /> Calculadora de Vitalidade
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-4 leading-tight">
            Descubra o plano ideal <br className="hidden sm:block"/><span className="italic text-brand-red">para o seu pet</span>
          </h2>
          <p className="text-neutral-500 text-base md:text-lg max-w-2xl mx-auto">Em menos de 1 minuto, nosso algoritmo nutricional gera um Plano de Vitalidade personalizado.</p>
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
                    {AGE_OPTIONS.map(a => <button key={a} onClick={() => setProfile({ ...profile, age: a })} className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${profile.age === a ? 'border-brand-blue bg-brand-blueLight/50 text-brand-blue' : 'border-neutral-200 bg-white text-neutral-600 hover:border-brand-blue/30'}`}>{a}</button>)}
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
                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-3">Alergias ou Restrições</label>
                  <div className="flex flex-wrap gap-2">
                    {ALLERGY_OPTIONS.map(a => <button key={a} onClick={() => toggleAllergy(a)} className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${profile.allergies.includes(a) ? a === 'Nenhuma' ? 'border-brand-sage bg-brand-sageLight text-brand-sageDark' : 'border-brand-red bg-brand-redLight text-brand-red' : 'border-neutral-200 bg-white text-neutral-500 hover:border-neutral-300'}`}>{a}</button>)}
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-neutral-200">
                  <input type="checkbox" id="neutered-check" checked={profile.isNeutered} onChange={(e) => setProfile({ ...profile, isNeutered: e.target.checked })} className="w-5 h-5 rounded" />
                  <label htmlFor="neutered-check" className="text-sm text-neutral-700 font-medium cursor-pointer">{profile.name} é castrado(a)</label>
                </div>
              </div>
            )}

            {step === 4 && result && (
              <div className="animate-fade-in">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-brand-sageLight text-brand-sageDark px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4"><Sparkles size={14} /> Plano Gerado</div>
                  <h3 className="text-2xl md:text-3xl font-serif text-neutral-900">Plano de Vitalidade para <span className="text-brand-red italic">{profile.name}</span></h3>
                </div>
                <div className="grid grid-cols-3 gap-3 md:gap-4 mb-8">
                  <div className="bg-white rounded-2xl p-4 text-center border border-neutral-100 shadow-sm"><div className="text-2xl md:text-3xl font-serif text-brand-blue">{result.dailyCal}</div><div className="text-[10px] md:text-xs text-neutral-500 mt-1">kcal/dia</div></div>
                  <div className="bg-white rounded-2xl p-4 text-center border border-neutral-100 shadow-sm"><div className="text-2xl md:text-3xl font-serif text-brand-blue">{result.dailyG}g</div><div className="text-[10px] md:text-xs text-neutral-500 mt-1">porção/dia</div></div>
                  <div className="bg-white rounded-2xl p-4 text-center border border-neutral-100 shadow-sm"><div className="text-2xl md:text-3xl font-serif text-brand-blue">{result.monthKg}kg</div><div className="text-[10px] md:text-xs text-neutral-500 mt-1">por mês</div></div>
                </div>
                <div className="bg-white rounded-2xl p-5 border border-neutral-100 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-4 flex items-center gap-2"><Zap size={14} className="text-brand-sage" /> Nutrientes Prioritários</h4>
                  <div className="space-y-3">{result.prios.map((p, i) => <div key={i} className="flex items-start gap-3"><CheckCircle2 size={16} className="text-brand-sage flex-shrink-0 mt-0.5" /><span className="text-sm text-neutral-700">{p}</span></div>)}</div>
                </div>
                <div className="bg-gradient-to-r from-brand-blueDark to-brand-blue rounded-2xl p-5 text-white mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-4 flex items-center gap-2"><Shield size={14} /> Economia Real</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div><div className="text-white/50 text-[10px] uppercase tracking-wider mb-1">Ração + vet/mês</div><div className="text-xl font-serif line-through opacity-60">R$ {result.priceRac + result.vetSave}</div></div>
                    <div><div className="text-brand-sageLight text-[10px] uppercase tracking-wider mb-1">Plano Cozinha Pet</div><div className="text-xl font-serif">R$ {result.priceCoz}</div></div>
                  </div>
                </div>
                <button className="w-full bg-brand-red text-white py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-brand-redDark transition-all shadow-xl hover:shadow-brand-red/30 flex items-center justify-center gap-3 group active:scale-[0.98]" id="activate-plan-cta">
                  <Heart size={20} fill="white" /> Ativar Plano de {profile.name} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-xs text-neutral-400 mt-3">Garantia de 30 dias • Cancele quando quiser • Frete grátis no 1º pedido</p>
              </div>
            )}

            {step < 4 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200/50">
                {step > 1 ? <button onClick={() => setStep((step - 1) as Step)} className="flex items-center gap-2 text-neutral-500 hover:text-neutral-800 font-medium text-sm transition-colors"><ArrowLeft size={16} /> Voltar</button> : <div></div>}
                <button onClick={() => canGo() && setStep((step + 1) as Step)} disabled={!canGo()} className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition-all ${canGo() ? 'bg-brand-blue text-white hover:bg-brand-blueDark shadow-lg active:scale-95' : 'bg-neutral-100 text-neutral-300 cursor-not-allowed'}`} id="calc-next-btn">Continuar <ArrowRight size={16} /></button>
              </div>
            )}
            {step === 4 && <div className="flex justify-center mt-6"><button onClick={() => { setStep(1); setProfile({ name: '', species: 'dog', weight: 10, age: '', size: '', activityLevel: '', isNeutered: false, allergies: [] }); }} className="text-neutral-400 hover:text-neutral-600 font-medium text-xs transition-colors underline underline-offset-4">Calcular para outro pet</button></div>}
          </div>
        </div>
      </div>
    </section>
  );
};
