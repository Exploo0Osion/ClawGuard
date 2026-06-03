from PyInstaller.utils.hooks import collect_submodules


BUNDLE_DATAS = [
    ('dist', 'dist'),
    ('core', 'core'),
]

HIDDEN_IMPORTS = [
    'pyexpat',
    'xml',
    'xml.etree',
    'xml.etree.ElementTree',
    'xml.parsers',
    'xml.parsers.expat',
]
HIDDEN_IMPORTS += collect_submodules('xml.etree')


a = Analysis(
    ['launcher.py'],
    pathex=[],
    binaries=[],
    datas=BUNDLE_DATAS,
    hiddenimports=HIDDEN_IMPORTS,
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
    optimize=0,
)
pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.datas,
    [],
    name='ClawGuardLauncher',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=True,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
)
