# Mads World - Database Mondiale Gallerie d'Arte Emergenti

Applicazione web per la gestione e visualizzazione del database mondiale di gallerie d'arte emergenti.

## Caratteristiche Principali

- Visualizzazione di gallerie d'arte emergenti da tutto il mondo
- Filtri per continente, paese, città e tipologia
- Vista a elenco e mappa
- Statistiche dettagliate sulla distribuzione delle gallerie
- Form semplificato per proporre nuove gallerie
- Area amministrativa protetta

## Tecnologie Utilizzate

- React 18 con TypeScript
- Tailwind CSS per lo styling
- Vite come build tool
- React Router per la navigazione
- Recharts per le visualizzazioni grafiche
- React Google Maps API per l'integrazione delle mappe

## Struttura del Progetto

```
mads-world-improved/
├── public/             # Asset statici e immagini
├── src/
│   ├── components/     # Componenti riutilizzabili
│   ├── context/        # Context API per lo stato dell'applicazione
│   ├── data/           # Dati e modelli
│   ├── hooks/          # Custom hooks
│   ├── pages/          # Componenti pagina
│   ├── types/          # Definizioni di tipo TypeScript
│   ├── utils/          # Funzioni di utilità
│   ├── App.tsx         # Componente principale e routing
│   └── main.tsx        # Entry point
├── .gitignore          # File esclusi dal repository
├── package.json        # Dipendenze e script
├── tailwind.config.js  # Configurazione Tailwind CSS
├── tsconfig.json       # Configurazione TypeScript
└── vite.config.js      # Configurazione Vite
```

## Installazione

1. Clona il repository:
   ```
   git clone https://github.com/tuoutente/mads-world-improved.git
   cd mads-world-improved
   ```

2. Installa le dipendenze:
   ```
   pnpm install
   ```

3. Avvia l'ambiente di sviluppo:
   ```
   pnpm dev
   ```

4. Genera la build di produzione:
   ```
   pnpm build
   ```

## Deployment

Per eseguire il deployment dell'applicazione:

1. Genera una build di produzione:
   ```
   pnpm build
   ```

2. La cartella `dist` conterrà i file ottimizzati per la produzione che possono essere serviti da qualsiasi web server statico.

## Accesso all'Area Amministrativa

Per accedere all'area amministrativa, utilizzare le seguenti credenziali:

- Email: owner@madsworld.com
- Password: (fornita dal proprietario)

## Modifiche Principali rispetto alla Versione Precedente

1. **Sicurezza**:
   - Sistema di login sicuro senza visualizzazione di credenziali
   - Accesso limitato al solo proprietario con autenticazione tramite email

2. **Dashboard**:
   - Ottimizzazione delle card con rimozione dello spazio per le foto
   - Design compatto che mostra solo i dati essenziali

3. **Form Proponi Galleria**:
   - Semplificazione con solo 4 campi essenziali (Paese, Nome, Sito, Email)
   - Design minimalista per una migliore esperienza utente

4. **Struttura del Codice**:
   - Organizzazione ottimizzata per GitHub
   - Documentazione completa
   - Supporto per deployment automatico

## Licenza

Tutti i diritti riservati.
```
