
import os

folders = [
    "components",
]

for folder in folders:
    os.makedirs(folder, exist_ok=True)
    print(f"Created folder: {folder}")

print("\nFolders created successfully. You can now copy the file contents from the XML.")
