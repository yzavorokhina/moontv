class ThemeManager {
  constructor() {
    this.currentTheme = this.getStoredTheme() || 'light';
    this.applyTheme(this.currentTheme);
  }

  // Сохранённая тема из localStorage
  getStoredTheme() {
    return localStorage.getItem('app-theme');
  }

  // Сохранение темы в localStorage
  storeTheme(themeName) {
    localStorage.setItem('app-theme', themeName);
  }

  // Применение темы: добавление класса к <html> и сохранение
  applyTheme(themeName) {
    // Удаление всех классов тем
    document.documentElement.className = document.documentElement.className
      .replace(/\btheme-\w+\b/g, '')
      .trim();

    // Добавление нового класса темы
    if (themeName !== 'light') {
      document.documentElement.classList.add(`theme-${themeName}`);
    }

    this.currentTheme = themeName;
    this.storeTheme(themeName);
  }

  // Переключение на следующую тему
  toggleTheme() {
    const themes = ['light', 'dark', 'high-contrast'];
    const currentIndex = themes.indexOf(this.currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    this.applyTheme(themes[nextIndex]);
  }
}

window.ThemeManager = ThemeManager;