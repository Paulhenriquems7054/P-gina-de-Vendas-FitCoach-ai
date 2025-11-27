# Pasta Public - Assets Estáticos

Esta pasta contém arquivos estáticos que serão servidos diretamente pelo Vite.

## Logo do FitCoach.ia

Para usar a imagem do logo ao invés do SVG, adicione o arquivo de imagem aqui com o nome:

**`logo.png`** ou **`logo.svg`**

### Formatos suportados:
- PNG (recomendado para logo com fundo)
- SVG (recomendado para logo vetorial)
- JPG/JPEG

### Como usar:

1. Adicione o arquivo `logo.png` ou `logo.svg` nesta pasta (`public/`)
2. O componente Logo automaticamente detectará e usará a imagem
3. Se preferir forçar o uso da imagem, passe a prop `useImage={true}` no componente Logo

### Exemplo de uso:

```tsx
// Usar imagem se disponível, senão usa SVG
<Logo size={24} />

// Forçar uso da imagem
<Logo size={24} useImage={true} />

// Logo com texto abaixo
<Logo size={64} showText={true} useImage={true} />
```

### Tamanhos recomendados:

- **Ícone pequeno (header)**: 24x24px ou 32x32px
- **Ícone médio (footer)**: 24x24px ou 32x32px  
- **Logo grande (animação)**: 64x64px ou 128x128px
- **Logo completo (com texto)**: 200x280px (proporção aproximada)

