# Monra AI-Assistent — Architectuurplan

## Doel
Een lokaal draaiende AI-assistent die alles weet van Monra en bezoekers/medewerkers
kan helpen met vragen en eenvoudige taken automatiseren.

---

## Aanbevolen aanpak: Ollama + klein LLM + RAG

### Stap 1 — Model kiezen (lokaal)

| Model | Grootte | Geschikt voor |
|-------|---------|---------------|
| **Mistral 7B** | ~4 GB RAM | Beste balans kwaliteit/snelheid — aanbevolen |
| Llama 3.2 3B | ~2 GB RAM | Sneller, iets minder slim |
| Phi-3 Mini | ~2 GB RAM | Snel, goed voor Q&A |

**Aanbeveling: Mistral 7B via Ollama**
- Gratis, volledig lokaal, geen data naar buiten
- Draait op normale laptop (8 GB RAM voldoende)
- Installatie: https://ollama.com → 1 commando

```bash
# Installeren en starten
ollama run mistral
```

---

### Stap 2 — Knowledge base (wat weet de assistent?)

De assistent krijgt toegang tot een set Monra-documenten (RAG = Retrieval Augmented Generation):

```
monra-kennis/
├── bedrijfsinfo.md          ← KVK, adres, telefoon, e-mail, takken
├── diensten-security.md     ← Alle security diensten + prijsranges
├── diensten-support.md      ← Alle 9 support diensten
├── diensten-events.md       ← Events Security + Senna info
├── opleiding-eso.md         ← ESO opleiding stap voor stap
├── faq.md                   ← Veelgestelde vragen + antwoorden
├── procedures.md            ← Interne procedures (spoed, backup, etc.)
└── klanten.md               ← Sectoren, type klanten, referenties
```

**Hoe werkt RAG:**
1. Bezoeker stelt vraag → systeem zoekt relevante stukken uit de kennisbank
2. Relevante info + vraag gaan naar het LLM
3. LLM geeft antwoord gebaseerd op échte Monra-data (geen hallucinaties)

---

### Stap 3 — Automatisering (wat kan de assistent doen?)

**Fase 1 (simpel, direct te bouwen):**
- Vragen beantwoorden over diensten, tarieven, procedures
- Bezoeker doorverwijzen naar juiste tak (Security / Support / Events)
- Offerte-aanvraag formulier pre-invullen op basis van gesprek

**Fase 2 (meer werk, hoog rendement):**
- E-mail concepten schrijven bij aanvraag
- Planning checken: "Is er capaciteit op [datum]?"
- Automatisch terugmeldingen sturen na evenement

**Fase 3 (toekomst):**
- Koppeling met agenda/planning systeem
- Rapportage genereren na inzet
- Offerte PDF genereren

---

### Stap 4 — Technische stack (eenvoudig)

```
Bezoeker/medewerker
        ↓
  Chat interface (simpele webpagina of in de bestaande site)
        ↓
  Python backend (FastAPI — lichtgewicht)
        ↓
  Ollama (lokaal LLM — Mistral 7B)
        ↓
  ChromaDB (lokale vector database voor kennisbank)
```

**Bestanden die we bouwen:**
- `monra-assistent/app.py` — de backend
- `monra-assistent/kennis/` — de kennisbank documenten
- `monra-assistent/index.html` — de chat UI (goud/navy thema)

---

### Stap 5 — Installatie op jouw computer

**Vereisten:**
- Windows 10/11
- Python 3.10+ (al geïnstalleerd)
- 8+ GB RAM
- Ollama (gratis download)

**Stappen:**
1. Download Ollama: https://ollama.com/download
2. Voer uit: `ollama pull mistral`
3. Voer uit: `pip install fastapi uvicorn chromadb langchain`
4. Start: `python monra-assistent/app.py`
5. Open: `http://localhost:8000`

---

## Tijdlijn

| Week | Wat |
|------|-----|
| Week 1 | Ollama installeren + kennisbank vullen |
| Week 2 | Python backend bouwen + testen |
| Week 3 | Chat UI in website integreren |
| Week 4 | Finetunen op basis van echte vragen |

---

## Volgende stap

Zeg "bouw de assistent" dan maak ik:
1. Alle kennisbank `.md` bestanden (gevuld met Monra-data)
2. `app.py` backend
3. Chat widget die in de Monra-website past

De assistent draait dan volledig lokaal — geen abonnement, geen data naar buiten.
