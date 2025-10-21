# 🚀 Guia de Deploy na Vercel - Buffet Pierroti Eventos

## 📋 Pré-requisitos

- ✅ Conta na Vercel (gratuita)
- ✅ Repositório no GitHub conectado
- ✅ Projeto configurado e testado localmente

## 🔧 Configurações Implementadas

### ✅ Arquivos de Configuração Criados:
- `vercel.json` - Configurações específicas da Vercel
- `.vercelignore` - Arquivos ignorados no deploy
- `env.example` - Exemplo de variáveis de ambiente
- `public/robots.txt` - SEO e crawling
- `public/sitemap.xml` - Mapa do site
- `public/manifest.json` - PWA support

### ✅ Otimizações Implementadas:
- **Next.js Config**: Otimizado para produção
- **Imagens**: WebP/AVIF com otimização automática
- **SEO**: Metadados completos e estruturados
- **Performance**: Bundle optimization e tree shaking
- **Segurança**: Headers de segurança configurados
- **Cache**: Estratégias de cache otimizadas

## 🚀 Passos para Deploy

### 1. **Conectar Repositório**
```bash
# Acesse: https://vercel.com/new
# Conecte com GitHub: LuisCarlos01/Buffet
```

### 2. **Configurar Projeto**
- **Framework Preset**: Next.js
- **Root Directory**: `./` (padrão)
- **Build Command**: `npm run build` (automático)
- **Output Directory**: `.next` (automático)

### 3. **Variáveis de Ambiente** (Opcional)
```bash
# Adicione no painel da Vercel:
NEXT_PUBLIC_SITE_URL=https://buffet-pierroti-eventos.vercel.app
NEXT_PUBLIC_SITE_NAME="Buffet Pierroti Eventos"
NEXT_PUBLIC_CONTACT_PHONE="(11) 98765-4321"
NEXT_PUBLIC_CONTACT_EMAIL="contato@buffetpierroti.com.br"
```

### 4. **Deploy Automático**
- ✅ Push para `main` → Deploy automático
- ✅ Pull Requests → Preview deployments
- ✅ Domínio customizado disponível

## 🌐 URLs de Deploy

### **Produção:**
- **Vercel**: `https://buffet-pierroti-eventos.vercel.app`
- **Custom**: `https://buffetpierroti.com.br` (após configurar DNS)

### **Preview:**
- **PR Preview**: `https://buffet-pierroti-eventos-git-[branch]-luiscarlos01.vercel.app`

## 📊 Monitoramento

### **Analytics Incluídos:**
- ✅ Vercel Analytics (automático)
- ✅ Core Web Vitals
- ✅ Performance metrics
- ✅ Real User Monitoring

### **Logs Disponíveis:**
- ✅ Build logs
- ✅ Function logs
- ✅ Edge logs
- ✅ Real-time monitoring

## 🔧 Comandos Úteis

### **Deploy Manual:**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### **Verificar Build Local:**
```bash
# Build de produção
npm run build

# Testar build
npm run start

# Verificar tipos
npm run type-check
```

## 🎯 Próximos Passos

### **Após Deploy:**
1. **Configurar Domínio**: Adicionar domínio customizado
2. **Google Analytics**: Adicionar GA4 tracking
3. **Search Console**: Submeter sitemap
4. **Performance**: Monitorar Core Web Vitals
5. **SEO**: Verificar indexação

### **Melhorias Futuras:**
- **CMS**: Integrar Strapi/Sanity
- **Email**: Configurar SendGrid/Resend
- **Database**: Adicionar Supabase/PlanetScale
- **Payments**: Integrar Stripe/PagSeguro

## 🆘 Troubleshooting

### **Build Errors:**
```bash
# Verificar logs
vercel logs

# Build local para debug
npm run build
```

### **Performance Issues:**
- Verificar bundle size: `npm run build:analyze`
- Otimizar imagens: Converter para WebP
- Lazy loading: Implementar em componentes

### **SEO Issues:**
- Verificar sitemap: `/sitemap.xml`
- Testar robots.txt: `/robots.txt`
- Validar metadados: Google Rich Results

---

## ✅ Checklist de Deploy

- [ ] Repositório conectado na Vercel
- [ ] Build passando sem erros
- [ ] Variáveis de ambiente configuradas
- [ ] Domínio customizado (opcional)
- [ ] Analytics configurado
- [ ] SEO verificado
- [ ] Performance otimizada
- [ ] Monitoramento ativo

**Status**: 🚀 Pronto para Deploy!
