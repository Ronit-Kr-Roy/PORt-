import shutil
import os

source_dest_pairs = [
    (
        r"C:\Users\HP\.gemini\antigravity-ide\brain\93371c90-9106-4164-9296-59a6bd6e8da9\playwright_icon_1782991504230.png",
        r"assets/playwright_icon.png"
    ),
    (
        r"C:\Users\HP\.gemini\antigravity-ide\brain\fee31fe8-d80e-421b-b972-c6e74dbdb2b3\spring_logo_1782593591018.png",
        r"assets/spring_icon.png"
    ),
    (
        r"C:\Users\HP\.gemini\antigravity-ide\brain\fee31fe8-d80e-421b-b972-c6e74dbdb2b3\selenium_logo_1782593603760.png",
        r"assets/selenium_icon.png"
    ),
    (
        r"C:\Users\HP\.gemini\antigravity-ide\brain\fee31fe8-d80e-421b-b972-c6e74dbdb2b3\ci_cd_logo_1782593616673.png",
        r"assets/ci_cd_icon.png"
    ),
    (
        r"C:\Users\HP\.gemini\antigravity-ide\brain\93371c90-9106-4164-9296-59a6bd6e8da9\media__1782992115596.pdf",
        r"resume.pdf"
    )
]

print("Starting asset copying process...")
os.makedirs("assets", exist_ok=True)

for src, dest in source_dest_pairs:
    if os.path.exists(src):
        shutil.copy2(src, dest)
        print(f"Successfully copied: {os.path.basename(src)} -> {dest}")
    else:
        print(f"Error: Source file not found: {src}")

print("Asset copying process completed!")
