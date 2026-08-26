# AI + Digital Human - official source map and coverage

Verified 2026-08-26. Every fact on a course page traces to a URL below.

**Read this first.** The first research pass on this topic came back materially incomplete and said
so. A second, targeted pass was run. Anything still unverified is in the final section and must not
appear on a page. On a course about consent and disclosure, a confident wrong claim is worse than a
gap.

## The 80% bar

Each session teaches ~80% of its mapped sources' working content. Certificates and vendor training
stay with the vendors. Said plainly on every session page.

## PRODUCT NAMES THAT CHANGED, and will date any older material

- **HeyGen's "Interactive Avatar" no longer exists under that name.**
  `heygen.com/interactive-avatar` 301-redirects to a separate brand, domain and subscription:
  **LiveAvatar**. HeyGen's own help centre: "LiveAvatar is HeyGen's real-time AI avatar
  technology", sold as stand-alone plans, and avatars are **not cross-compatible** between the two.
  https://help.heygen.com/en/articles/12758866-liveavatar-faq · https://www.liveavatar.com/
- **D-ID is alive and is the acquirer, not the acquired.** It announced the acquisition of
  simpleshow on 2025-09-16, with the combined company operating under the D-ID brand.
  https://www.d-id.com/news/d-id-announces-simpleshow-acquisition-to-create-a-digital-human-and-ai-video-powerhouse/
  Its own AI-Info page confirms "simpleshow... is now part of D-ID". https://www.d-id.com/ai-info/
- **D-ID renamed its avatar tiers.** "Express Avatar" is now **V3 Instant**, "Premium+" is now
  **V3 Pro**, photo avatars are **V2**. Old names survive in D-ID's own URL slugs.
  https://help.d-id.com/hc/en-us/articles/31467532751889

## THE SPINE: consent is not one thing, and what you get depends on what you pay

This is the course's argument. Three vendors, three genuinely different answers to "may I make an
avatar of a real person", and the differences are not marketing noise - they are the whole risk.

### Whether consent is required at all depends on which avatar you pick

| Vendor | Photo avatar | Video avatar | Source |
|---|---|---|---|
| **Synthesia** | **live consent recording required**, and you may not create one for someone else at all: "Photo Avatars must be created directly by the person whose likeness is being used. You may not create or submit a Photo Avatar on behalf of another person, **even if you have their permission or consent**" | live consent, cannot be uploaded, same person must appear in both | https://help.synthesia.io/en/articles/13846500-photo-avatars-content-moderation · https://docs.synthesia.io/docs/personal-avatars |
| **HeyGen** | **none.** "Photo avatars and prompt-to-avatar characters depict no real, identifiable person and do not require consent" - a claim that only holds if the photo is not of a real person, which the product does not prevent | consent video required for every video-based Digital Twin | https://developers.heygen.com/docs/avatar-consent · https://help.heygen.com/en/articles/12092609-recording-your-consent-video |
| **D-ID** | **none.** V2 avatars need only an uploaded image; the only gate is automated celebrity detection | V3 Instant and V3 Pro require a webcam consent statement with a dynamic 3-word passcode; uploads not allowed | https://help.d-id.com/hc/en-us/articles/31198323640721 · https://help.d-id.com/hc/en-us/articles/31467532751889 |

### Only one of the three publishes what the person actually says

**Synthesia publishes the script, and it is a real consent statement:** "My name is [First_name
Last_name]. This recording will be used on the Synthesia platform to create a digital Avatar that
looks and sounds like me." Provided in roughly 30 languages, to be read in the actor's native
language.
https://8269203.fs1.hubspotusercontent-na1.net/hubfs/8269203/SynthesiaConsentRecording.pdf

**HeyGen's published statement contains no words of consent at all.** The only wording it
publishes is: "Hey there! I'm speaking with LOTS of energy, while staying natural and confident.
This helps HeyGen capture my voice, my expressions, and my motion, so my avatar can behave JUST
like me in ANY video!" That is a performance-capture prompt, not permission. HeyGen says consent is
"validated semantically". https://developers.heygen.com/docs/avatar-consent

**D-ID publishes no consent wording anywhere.**

### The finding that should stop a room

**HeyGen sells the ability to skip consent collection entirely.** From its own developer docs, as
the third of three consent levels:

> "Skip the consent flow - Consent collection is waived entirely for accounts that have signed an
> indemnity agreement."

Enterprise only. https://developers.heygen.com/docs/avatar-consent

Teach it exactly as written, and teach what it means: the consent step is a liability-allocation
mechanism as much as an ethical one, and it is purchasable.

### What enterprise money buys at each vendor, which is different every time

- **HeyGen: the consent step itself.** See above.
- **Synthesia: content latitude.** Political content "will only be permitted through our Enterprise
  Plans with a Studio or Personal avatar"; the same applies to news. Medical and legal topics are
  Restricted rather than banned. And the impersonation prohibition is worded to apply "where such
  content is produced by **non-enterprise** Service plans".
  https://help.synthesia.io/en/articles/8330530-disagreeable-content ·
  https://www.synthesia.io/legal/acceptable-use-policy
- **D-ID: the public-figure block.** Automated celebrity detection can be overridden - "For
  Advanced plan users: If you have the rights to use the image, you can request a manual review by
  our legal team. For Enterprise plan users: There is an option to override moderation restrictions
  in certain cases." https://help.d-id.com/hc/en-us/articles/31467393669009

### Who owns the videos of your face

**Synthesia warns the subject directly, and this is the single best paragraph to put in front of
anyone about to say yes:**

> "Because Customer, and not you, will own any videos that incorporate those Custom Avatars and can
> exercise choice and control over that Customer Data, please ensure you are fully informed by
> Customer about how it intends to use them before you consent."

https://www.synthesia.io/legal/user-terms-of-service

**D-ID takes the broadest grant of the three**, and extends rights to other users: "a worldwide,
irrevocable, non-exclusive, royalty-free, perpetual, and transferable right to use, reproduce,
distribute... including without limitation for redistributing part or all of your User
Submissions", plus "you hereby waive any moral rights" and a grant to "each Software user".
https://www.d-id.com/studio-end-user-license-agreement/

### Training on your likeness

| Vendor | Position | Source |
|---|---|---|
| D-ID | **never, for biometrics**: "Biometric Information is not used to improve our products and services (nor to train the AI models that power them)" | https://www.d-id.com/biometric-privacy-policy/ |
| Synthesia | not for pre-training; fine-tuning only "subject to the written instruction of the customer" | https://www.synthesia.io/legal/ai-governance-practices |
| HeyGen | yes by default under an irrevocable ToS licence "including to train or otherwise improve or modify our artificial intelligence and machine learning models", with an email opt-out | https://www.heygen.com/terms · https://www.heygen.com/privacy |

### Revocation, and whether it reaches what was already published

- **Synthesia: 90 days, with written confirmation.** "Synthesia permanently removes avatar, video,
  and voice data within 90 days of a deletion request... Synthesia provides written confirmation
  once deletion is complete." https://help.synthesia.io/en/articles/9490158-what-is-the-time-frame-to-complete-a-deletion-request
- **HeyGen: biometric data destroyed within 60 days** of avatar or account deletion; personal data
  deletion attempted within 72 hours. https://www.heygen.com/biometric-privacy-notice
- **D-ID: no fixed biometric retention cap published at all** - "as long as necessary or relevant to
  create and maintain your avatar or for the maximum timeframe permitted under applicable law".
  https://www.d-id.com/biometric-privacy-policy/
- **None of the three states that deleting an avatar removes videos already generated from it.**
  D-ID states the opposite for shared content: "any public activity on your account prior to
  deletion will remain stored on our servers and will remain accessible to the public."
  https://www.d-id.com/privacy-policy/

### If a stranger finds an avatar of themselves

- **Synthesia** has a formal, staged **Privacy Takedown Process** to legal@synthesia.io - but
  "only individuals, and not organizations or companies, may avail themselves of this process", it
  routes through the customer first, and Synthesia "cannot guarantee the removal of content from
  external sources." https://www.synthesia.io/legal/content-integrity-policy
- **HeyGen** publishes one line: the Actor "reserves the right to request removal of their likeness
  from our Services at any time" via moderation@heygen.com.
  https://www.heygen.com/moderation-policy
- **D-ID publishes no route at all.** Only DMCA for copyright owners and dpo@d-id.com for your own
  biometric data. Stated as a finding, not an accusation.

## What the tools actually are

| | HeyGen | Synthesia | D-ID |
|---|---|---|---|
| Free tier | 3 videos/mo, 1 min max, watermarked | 10 min/mo, **cannot download at all** | 14-day trial, 3 min |
| Max video length | 1 min free, 30 min, 60 min Business, no max Enterprise | 150 scenes x 5 min, **4 hours total** | **5 minutes, every plan** |
| Max resolution | 4K from Pro | **1080p only** | 1080p premium presenters, 1280x1280 standard |
| **Watermark** | removable from $29 | removable from $18 | **never fully removable, even Enterprise** |
| Languages | 175+ (30+ free) | 160+ | 119 |
| Real-time | spun out to LiveAvatar | Interactive Avatars, beta | AI Agents, GA |

https://www.heygen.com/pricing · https://www.synthesia.io/pricing ·
https://help.synthesia.io/en/articles/9317524-how-do-i-download-my-synthesia-video ·
https://www.d-id.com/pricing/studio/ · https://www.d-id.com/faqs/ ·
https://docs.synthesia.io/docs/video-creation

**The watermark row is the teachable one.** D-ID: "Trial and Lite plan get a D-ID logo watermark...
Pro and Advanced plan users get a generic AI watermark... **Enterprise users can customize the AI
watermark but not remove it.**" D-ID ties this to its published ethics position. It is the only one
of the three where you cannot buy your way out of the mark.
https://www.d-id.com/faqs/ · https://www.d-id.com/ethics/

Synthesia's watermark-integrity clause points the same way from the other direction: its AUP
prohibits "Removing, deactivating or disabling any 'watermarks' or other mechanisms of the Services
that are designed to help validate provenance."
https://www.synthesia.io/legal/acceptable-use-policy

## What happened to real people who said yes

AFP, 2025-04-16, carried by TechXplore. https://techxplore.com/news/2025-04-sold-ai-platforms.html

- **Connor Yeates**, British actor: a **three-year Synthesia contract for EUR 4,600**. His avatar
  later appeared in content promoting Ibrahim Traore, who took power in Burkina Faso in a 2022 coup.
- **Adam Coy**, New York actor: **USD 1,000 for one year**. The contract prohibited only
  pornographic use and association with alcohol or tobacco. His clone appeared claiming to be "from
  the future" announcing disasters.
- **Simon Lee**, South Korean actor: contract terms **prevented removal of the videos**. His avatar
  promoted weight-loss tea and ice baths for acne.
- **Synthesia, on the record:** "a few videos slipped our content moderation partly because there
  was a gap in our enforcement."
- **The lawyer's test, and the one line to give every learner.** Alyssa Malchiodi: the red flag is
  "broad, perpetual and irrevocable language that gives the company full ownership... with no right
  of withdrawal."

Reporting grade: **A/B** - named individuals, named wire service, company on the record.

## The honest failure modes

- **Lip-sync is a documented constraint, not a rumour.** Synthesia's own docs: "Lip sync performs
  best when the avatar is framed closer in the scene." For photo-derived avatars: "Because movement
  is not learned from a real performance, the avatar's motion will not exactly match how you move in
  real life." And the tell that reveals the mechanism: "For best lip-sync results, choose a photo
  where your teeth are visible" - it is estimating mouth shapes, not observing them.
  https://docs.synthesia.io/docs/personal-avatars
- **The avatar generation you build on has a shelf life.** Synthesia's Legacy avatars "remain
  available... but are being phased out and are not recommended for new content."
  https://help.synthesia.io/en/articles/6341418-what-stock-avatars-are-available-in-synthesia
- **The likeness can walk out with the person.** On Synthesia, if the individual creates an account
  with the email the avatar request was sent to, "the Personal Avatar will be transferred from your
  account to theirs". https://docs.synthesia.io/docs/personal-avatars
- **No vendor publishes an offboarding policy** for what happens to an employee's avatar when they
  leave. Verified as an absence, across all three. That is an unanswered governance question the
  learner has to settle in their own contract, and the course says so.
- **Audience rejection is real and is not a technical failure.** McDonald's Netherlands posted a
  fully AI-generated Christmas ad and **pulled it three days later** after viewers called it "AI
  slop". It was made with a named agency and professional AI specialists. It failed on reception,
  not on craft.
  https://www.nbcnews.com/world/europe/mcdonalds-ai-generated-christmas-advert-social-media-backlash-rcna248590
- **Localisation that is fluent and culturally wrong.** A human-annotated benchmark across 7
  multilingual models and 15 language-locale pairs scored overall quality **1.68/3**, with **puns at
  1.45/3** and idioms frequently left untranslated: "a persistent gap between grammatical adequacy
  and cultural resonance." Independence caveat: the authors are Appen researchers and Appen sells
  human language services. https://arxiv.org/abs/2602.04729
- **Policy hygiene at all three vendors is poor, and learners should treat every policy as a
  snapshot.** HeyGen's Moderation Policy bans avatars of under-18s outright while its own Digital
  Twin FAQ says "users of all ages have the ability to create an avatar". Synthesia's AUP is stamped
  February 2024 yet cites a law adopted in June 2024. D-ID's help centre still uses retired product
  names in its URLs.

## The evidence on whether people can even tell

Diel et al. (2024), "Human performance in detecting deepfakes: A systematic review and
meta-analysis of 56 papers", *Computers in Human Behavior Reports* 16, 100538.
**56 papers, 137 effects, 86,155 participants.** Total detection accuracy **55.54%**, with a
confidence interval that **crosses chance**. By modality: audio 62.08%, video 57.31%, images
53.16%, text 52.00%. DOI 10.1016/j.chbr.2024.100538

**Why it matters for the course:** any policy that relies on the audience noticing is not a policy.
Disclosure has to be a deliberate act by the publisher.

**Sourcing caveat, and it must be honoured:** ScienceDirect returned 403 and the repository copy
was bot-blocked. The figures came from search extraction plus the author's own publication listing.
**Confirm against the DOI before these percentages go on a page**, or state them as "reported"
rather than quoted.

## Accountability precedent worth teaching

**Air Canada could not disclaim its own chatbot.** *Moffatt v. Air Canada*, 2024 BCCRT 149: the
tribunal rejected the argument that the chatbot was a separate legal entity - "While a chatbot has
an interactive component, it is still just a part of Air Canada's website" - and awarded $812.
Secondary sourcing only (CanLII returned 403); cite the neutral citation and verify before
publishing as a legal claim.
https://www.cbc.ca/news/canada/british-columbia/air-canada-chatbot-lawsuit-1.7116416

**The UK advertising regulator's position is authoritative and directly usable**, and it is the one
regulator page verified in full:
- "There is no blanket legal requirement in the UK to disclose the use of AI in ads."
- The two-question test: "Is the audience likely to be misled if the use of AI is not disclosed?"
  and "is the disclosure clarifying the ad's message or contradicting it?"
- **"Disclosure alone is very unlikely to mitigate the harm caused by a fundamentally misleading
  message."**
- And on responsibility: "Even though the ad was produced using Google's automated tools, the
  advertiser was still primarily responsible."
https://www.asa.org.uk/news/disclosure-of-ai-in-advertising-striking-the-balance-between-creativity-and-responsibility.html ·
https://www.asa.org.uk/news/ai-and-deepfakes-four-things-advertisers-need-to-know-before-they-hit-run.html

## Documented misuse, graded by how well it is actually sourced

The grading is itself teaching material. Most published deepfake statistics do not survive being
looked up, and this course shows learners how to tell.

### A-grade: confirmed by a named authority or the company on the record

- **Arup, Hong Kong, HK$200m (about USD 25.6m), early 2024.** A finance employee joined a video
  conference in which every other participant was synthetic. Acting Senior Superintendent **Baron
  Chan Shun-ching** of the Hong Kong Police, on the record: **"everyone you see is fake."** Arup
  later confirmed it was the targeted firm, with a spokesperson stating **"we can confirm that fake
  voices and images were used."**
  https://www.scmp.com/news/hong-kong/law-and-crime/article/3250851/everyone-looked-real-multinational-firms-hong-kong-office-loses-hk200-million-after-scammers-stage
  **Do not repeat the "15 transfers to 5 accounts" detail as company-confirmed** - it is press
  reconstruction of a police briefing. No arrests have been publicly announced.
- **Singapore, USD 499,000 recovered, March 2025.** A finance director was contacted on WhatsApp by
  someone impersonating the CFO and joined a video call featuring deepfaked executives including the
  CEO. He realised only when asked for a further USD 1.4m. Singapore and Hong Kong police recovered
  the funds. (The official SPF release URL 404s, likely because of the `$` in its slug; quoted via
  https://www.hcamag.com/asia/specialisation/hr-technology/singapore-firm-nearly-lost-500000-after-deepfake-video-scam-police/531450 )
- **LastPass, April 2024, and the company published it themselves.** An employee received "a series
  of calls, texts, and at least one voicemail featuring an audio deepfake from a threat actor
  impersonating our CEO via WhatsApp." The employee ignored it and reported it. "there was no impact
  to our company." https://blog.lastpass.com/posts/attempted-audio-deepfake-call-targets-lastpass-employee
- **Binance, 2022, also self-published.** Chief Communications Officer Patrick Hillmann found a
  deepfake of himself built from "previous news interviews and TV appearances" being used in video
  meetings with crypto teams. He discovered it when people thanked him for meetings he never
  attended. https://www.binance.com/en/blog/community/scammers-created-an-ai-hologram-of-me-to-scam-unsuspecting-projects-6406050849026267209
- **Synthetic news presenters, "Wolf News", Graphika 2023.** A pro-Chinese influence operation
  distributed videos with fictitious anchors, produced on a commercial AI video platform. The detail
  that belongs in the course: **none of the identified videos received more than 300 views.**
  https://graphika.com/reports/deepfake-it-till-you-make-it
  Graphika names the vendor only as "a commercial company in the United Kingdom"; the Synthesia
  attribution is press-reported, and Synthesia confirmed on the record that the accounts were banned.

### B-grade: major outlet citing named officials or the affected organisation

- **Ferrari, July 2024, and the defence is the best story in the course.** An executive received
  WhatsApp messages and a call impersonating CEO Benedetto Vigna, accent and all, pushing an NDA and
  a currency hedge tied to a supposed acquisition. **The executive defeated it by asking the caller
  to name a book Vigna had recommended to him days earlier.** No official Ferrari statement exists,
  so this is B not A. https://sloanreview.mit.edu/article/how-ferrari-hit-the-brakes-on-a-deepfake-ceo/
- **WPP, May 2024.** Fraudsters built a WhatsApp account using CEO Mark Read's image, convened a
  Teams meeting with a senior executive, and used a voice clone plus YouTube footage. Read, in an
  internal email: "We all need to be vigilant to the techniques that go beyond emails to take
  advantage of virtual meetings, AI and deepfakes." A spokesperson said the incident was prevented.
  https://incidentdatabase.ai/cite/983/
- **Dan Dewhirst and Synthesia**, which is the most relevant case for this specific course because
  it is not fraud at all. He signed with Synthesia in 2021 and later found his avatar delivering
  Venezuelan state-aligned messaging. In his words, he "was furious" and it was "really, really
  damaging to my mental health." A consenting participant, a mainstream commercial vendor, and a
  downstream use nobody prevented. https://www.vice.com/en/article/fake-news-ai-avatars-synthesia/

### C-grade: teach this one as a sourcing exercise, not as evidence

- **The 2019 UK energy-firm voice fraud, about EUR 220,000.** The single most-repeated "first
  deepfake fraud" story in vendor marketing. Its only named source is **Rüdiger Kirsch, a fraud
  expert at the insurer Euler Hermes** - the insurer that paid the claim. Both companies and both
  CEOs were anonymised. **No police force, regulator or company has ever confirmed it, and no
  technical evidence has been published.**
  https://www.forbes.com/sites/jessedamiani/2019/09/03/a-voice-deepfake-was-used-to-scam-a-ceo-out-of-243000/
  Use it to teach learners to trace a statistic to its origin. It is far more valuable as that than
  as a number.

### Aggregate figures, with the methodology caveat attached to each

| Figure | Source | The caveat that must travel with it |
|---|---|---|
| **USD 40bn by 2027**, from USD 12.3bn in 2023 | Deloitte Center for Financial Services, 2024 | **A projection, not a measurement.** Built by assigning a gen-AI risk score to each fraud type the FBI tracks, under adoption scenarios. Never present as observed loss. https://www.deloitte.com/us/en/insights/industry/financial-services/deepfake-banking-fraud-risk-on-the-rise.html |
| A rise in suspicious activity reports describing deepfake media | FinCEN Alert FIN-2024-Alert004, 2024-11-13 | A **trend in SAR filings**, not a loss total. SARs are suspicion, not confirmed fraud. https://fincen.gov/news/news-releases/fincen-issues-alert-fraud-schemes-involving-deepfake-media-targeting-financial |
| **USD 20.9bn** total cybercrime losses, 2025 | FBI IC3 Annual Report | **IC3 publishes no AI or deepfake-specific loss line.** Voluntary reports only. https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf |

**A number to actively refuse:** a widely circulated "USD 893 million in AI-related losses"
attributed to the FBI could not be traced to any FBI document. It does not go on a page.

### The cheapest control there is, and it comes from the FBI

FBI IC3 PSA I-120324-PSA (2024-12-03) lists, in its own words, criminals who "generate videos for
real time video chats with alleged company executives, law enforcement, or other authority figures"
and who "create videos for private communications to 'prove' the online contact is a 'real person'."

Its recommended countermeasure is **a pre-agreed secret word or phrase**. That is the Ferrari
defence, formalised. https://www.ic3.gov/PSA/2024/PSA241203

## Official learning paths to map coverage against

Several of these were renamed recently, which is itself worth noting on the page.

- Microsoft Learn, "Create speech-enabled apps with Azure Speech in Microsoft Foundry Tools" -
  **53 min, 9 units**, free. **Renamed** from Azure AI Speech. Covers speech, not avatars.
  https://learn.microsoft.com/en-us/training/modules/create-speech-enabled-apps/
- Microsoft Azure docs, "Text to speech avatar overview" - not a course, but it documents Video
  Avatar (10 min of recordings) versus Photo Avatar (single image plus about 1 min of consent
  audio), and links a Responsible AI **"disclosure for voice and avatar talent."**
  https://learn.microsoft.com/en-us/azure/ai-services/speech-service/text-to-speech-avatar/what-is-text-to-speech-avatar
- Microsoft Learn, "Use AI responsibly with Microsoft Foundry Content Safety" - **70 min**, free.
  https://learn.microsoft.com/en-us/training/modules/responsible-content-safety/
- MinnaLearn, "Get AI Ready" - **60 minutes**, free for individuals, mapped to EU AI Act literacy
  requirements. https://courses.minnalearn.com/en/courses/get-ai-ready-2026/
- LinkedIn Learning, "Ethics in the Age of Generative AI" - **45m**, 12 videos.
  https://www.linkedin.com/learning/ethics-in-the-age-of-generative-ai
- HeyGen Academy - real and free, no durations published. Getting Started, HeyGen for Businesses,
  industry playbooks, 12 product modules. Self-described as tutorials, not certified courses.
  https://www.heygen.com/academy
- NVIDIA **Audio2Face-3D** - **partially open-sourced, not just renamed**. SDK under MIT licence,
  models under the NVIDIA Open Model License, training framework under Apache.
  https://developer.nvidia.com/ace · https://github.com/NVIDIA/Audio2Face-3D-SDK
- **Synthesia Academy is behind a login wall.** The domain moved to academy.synthesia.io but no
  course titles, counts or durations are publicly verifiable. Stated as a limitation, not a gap.

**The gap this course fills:** every path above teaches either the speech technology or generic AI
ethics. **None of them teaches the consent architecture in section one** - which vendor requires
what, what enterprise money exempts you from, and who ends up owning video of your face.

## Provenance: what a Content Credential actually proves, in C2PA's own words

Session 5 rests on this, and the strongest material is C2PA telling you the limits itself.

**Current spec is 2.4, April 2026.** Content Credential is "the preferred non-technical term for a
C2PA Manifest". https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html

**It does not prove truth, and C2PA says so plainly:**

> "The C2PA specifications do not provide value judgments about the truth or falsehood of digital
> assets. In other words, the presence of valid manifests does not mean that anything is 'true';
> validated manifests only establish whether the provenance information can be verified as
> associated with the underlying asset, correctly formed, and free from tampering."

And in the same document: "Digital assets, such as images and videos, can have valid C2PA manifests
and still be deemed to be mis or disinformation."
https://spec.c2pa.org/specifications/specifications/2.4/security/Harms_Modelling.html

**Absence proves nothing either.** Asked "Should I distrust media without Content Credentials?",
C2PA's own answer is **"Maybe."** - "no assumption should be made about the trustworthiness of a
particular asset purely based on its usage of Content Credentials."
https://spec.c2pa.org/specifications/specifications/2.4/explainer/Explainer.html

**It can be removed.** C2PA's FAQ, "Can the provenance metadata be removed?" - **"Yes it can."**
Same document, "Is provenance always complete?" - **"No."**

**And in practice it usually is removed.** Tim Bray, reporting from the IPTC Photo Metadata
Conference: "There are very few Content Credentials out there on the Internet. That's because nearly
every online photo is delivered either via social media or by professional publishing software. In
both cases, the metadata is routinely stripped, bye-bye C2PA."
https://www.tbray.org/ongoing/When/202x/2025/09/18/C2PA-Investigations

**The analog hole, admitted in the threat model:** an attacker can "take a photo of an image
rendered by a high-definition television. The image captured by the device would be technically
valid and realistic."
https://spec.c2pa.org/specifications/specifications/2.4/security/Security_Considerations.html

### Two case studies that make the limits concrete

**Nikon shipped it, then revoked every certificate.** Z6III firmware v2.00 added C2PA on
2025-08-27. https://www.nikon.com/company/news/2025/0827_imaging_01.html A defect found days later
(multiple-exposure mode could produce fraudulently signed images) led Nikon to suspend the service
and invalidate every certificate issued since launch. **Sourcing caveat: Nikon delivered this as an
email to registered users; no public Nikon page hosts it, and its own service page still describes
the service as available.** Cite as reported, not as a Nikon publication.
https://petapixel.com/2025/09/05/nikon-suspends-c2pa-functionality-on-the-z6-iii-due-to-authentication-issue/

**A researcher forged a credential on the highest assurance level there is.** David Buchanan,
2026-08-25: "C2PA on the Android platform is broken, in a way that cannot be realistically patched."
He targeted Pixel Camera specifically because it holds **Assurance Level 2, the highest currently
defined**. Root access does not break key attestation, and an attacker "can ask StrongBox to use
these keys to sign whatever data they like". He demonstrated a YouTube video labelled "captured with
a camera" which was not. **Google closed it "Won't Fix (Infeasible)" and paid a $7,500 bounty.**
https://www.da.vidbuchanan.co.uk/blog/android-c2pa.html

He also notes: "most C2PA verification tools do not check for revocation."

### The finding that matters most for this course specifically

**None of Synthesia, HeyGen or D-ID appears on the C2PA Conforming Products List.** The list is
first-party, machine-readable and dated per product.
https://raw.githubusercontent.com/c2pa-org/conformance-public/refs/heads/main/conforming-products/conforming-products-list.json
· browsable: https://c2pa-org.github.io/conformance-explorer/

Teach it carefully, because absence from the conformance list is not proof a product lacks C2PA -
Adobe, Microsoft, TikTok and several camera makers ship provenance under the older trust model and
are also absent. What it does mean is that **no avatar vendor has passed the conformance program**,
so provenance is not the control you are relying on here. Disclosure is.

**ISO status, stated correctly:** the standard is **ISO/CD 22144, "Authenticity of information -
Content credentials", still under development** - "A draft is being reviewed by the committee",
stage 30.99 as of the most recent capture (2026-07-15). **It is not a published International
Standard.** Verify in a browser before teaching, as iso.org blocks automated fetching.
https://www.iso.org/standard/90726.html

### The one-sentence frame for the page

A Content Credential is a cryptographically signed statement by an identified signer about an
asset's history, bound to specific bits. It proves that **this signer said this, and nothing has
changed since**. It proves nothing about whether what the picture shows ever happened, nothing at
all when it is absent, and only as much as the signing device's security actually holds.

## The legal position, primary-sourced, as at 2026-08-26

Sourced from govinfo bulk data and codified statute text, not from law-firm commentary. Every
status below is stated with its actual enforceability, because that is where most published
summaries go wrong.

| Instrument | Where | Status as of 2026-08-26 |
|---|---|---|
| **TAKE IT DOWN Act, Public Law 119-12** | Federal | **Fully in force, both tranches.** Criminal provisions on enactment 2025-05-19; the platform notice-and-removal duty was due 2026-05-19 and that date has passed |
| **NO FAKES Act** (S. 1367 / H.R. 2794) | Federal | **STILL ONLY A BILL.** Introduced 2025-04-09, referred to committee, and the latest action is the day it was introduced. Never passed either chamber, in two consecutive Congresses |
| **FCC Declaratory Ruling 24-17** | Federal | **In force since 2024-02-08.** AI voice counts as "artificial or prerecorded voice" under the TCPA. The separate AI-disclosure rules proposed in Aug 2024 were **never adopted** |
| **California AI Transparency Act**, SB 942 as amended by AB 853 | California | **Operative 2026-08-02** - roughly three weeks before this was written. Further tranches 2027-01-01 and 2028-01-01 |
| **AB 2602** (Lab. Code s 927) | California | **In force** since 2025-01-01. Digital-replica contract clauses unenforceable without specific description plus counsel or union representation |
| **AB 1836** (Civ. Code s 3344.1) | California | **In force** since 2025-01-01. Consent required for digital replicas of deceased personalities |
| **AB 2839** (Elec. Code s 20012) | California | **Held unconstitutional in its entirety and permanently enjoined.** Not enforceable |
| **AB 2655** (Elec. Code s 20510) | California | **Held preempted by Section 230 and permanently enjoined.** The State then stipulated not to enforce it against any interactive computer service provider. Not enforceable |
| **NY S7676B** (Gen. Oblig. Law s 5-302) | New York | **In force** since 2025-01-01. Structurally near-identical to California AB 2602 |
| **Minn. Stat. s 609.771** | Minnesota | **NOT enjoined.** Preliminary injunction denied, affirmed by the Eighth Circuit 2026-02-09 |

**The two findings most worth teaching from that table.**

**One: there is no federal right of publicity or digital-replica statute.** The only enacted federal
AI-likeness law is the TAKE IT DOWN Act, and it is confined to non-consensual **intimate** imagery.
Anyone telling you federal law protects your likeness from synthetic use is describing a bill that
has never had a committee vote.
https://www.govinfo.gov/content/pkg/PLAW-119publ12/html/PLAW-119publ12.htm ·
https://www.govinfo.gov/bulkdata/BILLSTATUS/119/s/BILLSTATUS-119s1367.xml

**Two: California's election-deepfake laws were both defeated, on different grounds, while
Minnesota's survived.** AB 2839 fell on the First Amendment - content, viewpoint and speaker
discrimination, no severability, "fails strict scrutiny in its entirety". AB 2655 fell on Section
230 preemption, and the court expressly declined to reach its First Amendment challenge. Same lead
plaintiff, opposite outcomes, different circuits. **Both statutes are still on the books and neither
is enforceable**, which is exactly the distinction most summaries lose.
https://www.govinfo.gov/content/pkg/USCOURTS-caed-2_24-cv-02527/pdf/USCOURTS-caed-2_24-cv-02527-26.pdf ·
https://www.govinfo.gov/content/pkg/USCOURTS-caed-2_24-cv-02527/pdf/USCOURTS-caed-2_24-cv-02527-24.pdf ·
Eighth Circuit, No. 25-1300: https://ecf.ca8.uscourts.gov/opndir/26/02/251300P.pdf

**Precision the course must keep:** the AB 2839 permanent injunction is written party-specific
("against the named Plaintiffs") even though the reasoning invalidates the whole statute. Correct
phrasing is "held unconstitutional in its entirety; enforcement permanently enjoined as to the
plaintiffs; not repealed."

**What the California AI Transparency Act actually requires**, now that it is live, for any
generative system with over a million monthly users accessible in California: a free public **AI
detection tool** with an API; a user-electable **manifest disclosure** on generated content; and a
**latent disclosure** embedding provider name, system name and version, creation time and a unique
identifier. Penalty $5,000 per violation, each day separate.
https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=BPC&sectionNum=22757.6

**Two corrections that a later verification pass caught, and the course must honour both.**

1. **The California AI Transparency Act does not name C2PA or Content Credentials.** A text search of
   AB 853's enacted and introduced versions returns zero hits for "C2PA", "Content Credential" or
   "Coalition for Content". The statute uses the technology-neutral formula "provenance data ...
   compliant with widely adopted specifications adopted by an established standards-setting body",
   and SB 942's latent-disclosure test is "consistent with widely accepted industry standards".
   **C2PA is the obvious practical implementation. It is not a statutory citation, and the page must
   not imply the law requires it.**
2. **"California Provenance, Authenticity and Watermarking Standards Act" is not the statute's
   name.** That phrase appears nowhere in AB 853. The Legislature's own topic for the bill is simply
   "California AI Transparency Act". Treat the longer name as a commentator label.
   https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB853

**Also worth carrying: the two thresholds are different numbers.** A **covered provider** is a
generative AI system with **over 1,000,000 monthly visitors or users**. A **large online platform**,
which picks up the 2027 provenance duties, is one exceeding **2,000,000 unique monthly users**.
People conflate them.

**And one more that surprises people:** the **FTC Impersonation Rule (16 CFR Part 461) covers
government and businesses only.** The supplemental rulemaking that would have extended it to
impersonation of **individuals** was proposed in March 2024 and **never finalised** - the FTC's
August 2026 regulatory agenda still lists it as open. So AI voice-cloning of a private individual is
not covered by that rule.
https://www.federalregister.gov/documents/2024/03/01/2024-04335/trade-regulation-rule-on-impersonation-of-government-and-businesses ·
https://www.federalregister.gov/documents/2026/08/14/2026-16617/regulatory-agenda

**Tennessee ELVIS Act - flagged, not asserted.** It is enacted and in force, replacing the 1984
Personal Rights Protection Act and adding a property right in an individual's voice. But every
Tennessee state domain was unreachable during research, so the signing date, effective date and
vote counts come from a domain-restricted search index rather than a retrieved page. **Verify at the
bill URLs before this appears on a page**, and do not state the Public Chapter number or the
criminal penalty class, neither of which was established.

## THE TENSION THE COURSE MUST NOT HIDE

**Correction to an earlier draft of this map, which overstated this.** I previously wrote that
labelling suppresses trust as though it were settled. It is not. The largest synthesis available
disagrees with the individual experiments, and the course must teach the disagreement rather than
pick the more dramatic side.

**The systematic review says there is no consistent AI penalty.** Licenji and Hoxha, *Frontiers in
Artificial Intelligence* 2026, searched Scopus and Web of Science and read **47 full-text studies**
spanning 2018 to 2026. Their conclusions, verbatim: "AI provenance cues were not associated with a
consistent 'AI penalty': most extractable results indicated no difference between AI-attributed and
human-attributed news", and "the available full-text evidence does not support treating AI
disclosure as a uniform 'warning label' that consistently reduces credibility or trust." They
describe audience responses as "contingent, varying by design, context, and measurement target."
https://doi.org/10.3389/frai.2026.1815243

**But it also says disclosure never helps.** From the same review: **"no study showed a clearly
positive trust effect of AI authorship."** That is the finding to build the course on. Disclosure is
not a persuasion tactic under any reading of the evidence.

**The wording carries more weight than the presence of a label.** A between-subjects experiment
(n = 415) found message credibility varied significantly by whether the label said content was
"influenced", "assisted" or "generated" by AI, with **"AI-generated" faring worst** - while
**source credibility was unaffected by the label entirely**.
https://ojs.aaai.org/index.php/AIES/article/download/36671/38809/40746

**The individual experiments that point the other way are still real, and still worth teaching.**

**Labelling content as AI-generated suppresses trust in it even when it is true.**
Altay and Gilardi, *PNAS Nexus* 2024, **N = 4,976**, two pre-registered experiments across the US
and UK: participants "did not equate 'AI-generated' with 'False'", **but** labelling headlines as
AI-generated "lowered their perceived accuracy and participants' willingness to share them,
**regardless of whether the headlines were true or false, and created by humans or AI**." The
effect was three times smaller than labelling something false. https://doi.org/10.1093/pnasnexus/pgae403

**The mechanism is the most actionable finding here.** The aversion comes from an assumption of
"full AI automation with no human supervision". That means **the wording of your disclosure is not
cosmetic**. "AI-generated" and "AI-assisted, human-reviewed" are different stimuli.

**Corroborated independently.** Longoni, Fradkin, Cian and Pennycook, FAccT 2022, **N = 4,034**:
people rated AI-written headlines as less accurate, and were "more likely to **incorrectly** rate
news headlines written by AI as inaccurate **when they were actually true**."
https://doi.org/10.1145/3531146.3533077

**And labelling only some content quietly promotes the rest.** The implied truth effect: Pennycook,
Bear, Collins and Rand, *Management Science* 2020 - warnings on some false headlines mean "false
headlines that fail to get tagged are considered validated and thus are seen as more accurate."
Applied to provenance: if only some content carries Content Credentials, everything unlabelled gains
an unearned credibility bump - which is exactly the two-tier ecosystem C2PA's own Explainer says it
does not intend to create. https://doi.org/10.1287/mnsc.2019.3478

**How the course should hold this.** Say plainly that the evidence is contested: single experiments
on news headlines find a penalty, the 47-study synthesis finds no consistent one, and **nobody finds
a benefit**. Disclosure is still right, for a reason none of this research touches - it removes the
later moment where someone finds out. Teach it as a durability decision and an ethical one, never as
a persuasion tactic, and never claim it raises trust in the content itself. **And teach the wording
finding, because it is the one lever that is actually actionable.**

## What the learning research says about putting a face on screen at all

This is uncomfortable for the entire product category, and it is the best-evidenced section here.

**Mayer's multimedia principles, with effect sizes:**

| Principle | What it is | Median effect |
|---|---|---|
| **Personalization** | conversational rather than formal script register | **d = 1.11** |
| **Voice** | human rather than machine-synthesised narration | **d = 0.78** |
| **Image** | adding the speaker's image on screen | **d = 0.22, "small-to-negligible"** |

*Multimedia Learning*, 2nd ed., ch. 13. https://doi.org/10.1017/CBO9780511811678.018

**The script register matters roughly five times more than whether there is a face on screen.** An
avatar's presence is the weakest lever in the set.

**And the voice penalty has largely dissolved.** Dinçer 2022 (N = 51): human voice d = 0.90 and
modern TTS d = 0.75 both beat traditional TTS, with **no significant difference between human voice
and modern machine voice** (p = .200), and cognitive load statistically identical (p = .964).
https://doi.org/10.33902/JPR.202214591 Craig and Schroeder found the same reversal.
https://doi.org/10.1016/j.compedu.2017.07.003

**The one direct test of AI presenter video against human presenter video:** Leiker, Gyllen,
Eldesouky and Cukurova 2023, **N = 83** - both groups improved significantly (p < .001) with **no
significant difference in gains** (p = .80) and no difference in how learners perceived the videos.
https://arxiv.org/abs/2304.03784 **Teach the caveat too:** N = 83 is small and a null result at that
size is weak evidence of equivalence, not proof of it. No large replicated RCT exists.

**Pointing the other way, for persuasion rather than learning:** Chen, Zeng and Qiu 2025, three
experiments, **N = 839** - policy adoption intention was significantly higher for a human anchor
(M = 5.89) than a digital anchor (M = 4.21). Not replicated. https://doi.org/10.3389/fpsyg.2025.1650691

**The honest synthesis for the page:** for *teaching* content, the evidence does not support paying
much for a face. For *persuading* people, the limited evidence says a human still wins. Those are
different jobs and the course should not blur them.

## Which of the three vendors actually signs its output

| Vendor | C2PA member | Signs outputs | Evidence |
|---|---|---|---|
| **Synthesia** | not on the member list | **Yes**, per its own docs: videos "carry C2PA-based provenance signals embedded in the file", marking them AI-generated with a tamper-evident chain of custody - and "invisible to viewers" | https://help.synthesia.io/en/articles/16046624-what-does-the-eu-ai-act-article-50-mean-for-my-synthesia-videos |
| **HeyGen** | **yes, Contributor tier** | **not documented anywhere findable.** Its ethics page claims CAI membership and nothing about signing | https://c2pa.org/membership/members/ · https://www.heygen.com/ethics |
| **D-ID** | **no** | **no.** C2PA is never mentioned; the approach is visible, non-removable watermarks tiered by plan | https://www.d-id.com/ethics-in-ai/ |

**Membership is not implementation, and that distinction is the lesson.** The vendor on the
membership list is the one with no documented signing; the vendor doing it is not a member.

**And the standard itself is contested by independent researchers.** UMBC Cyber Defense Lab, Hacker
Factor and the NSA, April 2026, in the first independent security analysis of C2PA: "the current
C2PA specifications fail to achieve their claimed security goals", and it "should not yet be relied
upon for high-stakes uses such as financial disclosures, journalism, or legal evidence."
Documented failures include timestamps replaceable without detection, validators that fail to check
revocation, contradictory results between conforming validators, and certification "based largely on
self-reported compliance with no examination of the product's functionality or source code."
https://arxiv.org/abs/2604.24890 **Sourcing note: an arXiv whitepaper, no peer-reviewed venue
identified. Attribute it as such.**

## The consent machinery, vendor by vendor

All three vendors capture consent. They capture it very differently, and the differences are the
lesson.

| | HeyGen | Synthesia | D-ID |
|---|---|---|---|
| Consent video **upload** allowed | **Yes** - file or Google Drive link | No, live capture only | No, live capture only |
| Liveness challenge | code sometimes | passcode read aloud | dynamic passcode |
| Voice match | not stated | face + voice properties | **face + voice, named 3rd party tool** |
| Public-figure ban written down | **yes, explicit** | via publicity-rights clause | **absent** |
| Under-18 depiction | **flat ban** | exploitation framing | exploitation only |
| Political content | **banned outright** | **gated** by plan + consent | not addressed |
| Medical claims | not addressed | gated for stock avatars | **explicitly banned** |
| Depicted person can demand removal | **yes, named channel** | stock actors yes; custom via customer | **no mechanism published** |
| Dedicated biometric notice | **yes, detailed** | inside privacy policy | **none** |
| Leaver policy | none | **published and specific** | none |

**HeyGen is the only one that writes the removal right down**, verbatim: "The Actor reserves the
right to request removal of their likeness from our Services at any time. You are responsible for
honoring any request by or on behalf of an Actor to remove content depicting them wherever you have
published such depictions." https://www.heygen.com/moderation-policy (effective 25 July 2024)

**HeyGen is also the weakest on capture**, because it accepts an uploaded file or a pasted Drive
link as the consent video. Synthesia and D-ID both refuse uploads outright and require live webcam
capture with a passcode read aloud. Teach that contrast: the vendor with the strongest written right
has the weakest gate at the door.

**Synthesia gates political use rather than banning it**, verbatim: using a stock avatar "in a TV
program, news broadcast, fundraise or political campaign, or in the dissemination of any commentary
around current events, politics or topics that may be polarizing" requires written consent from
Synthesia, and for a custom avatar, "only on certain Services plans and with appropriate consent
from the individual." https://www.synthesia.io/legal/acceptable-use-policy

**D-ID uniquely bans medical claims outright** - the EULA prohibits content that "provides medical
advice and/or medical results interpretation", a clause neither competitor has. Its ethics page,
though, is hedged throughout: "do our best", "work to ensure", "strive to ensure". Aspirational, not
contractual. https://www.d-id.com/studio-end-user-license-agreement/ · https://www.d-id.com/ethics/

## The question nobody asks until it is too late: what happens when the person leaves

**Synthesia is the only vendor of the three that publishes an answer**, and reading its two
sentences together is genuinely uncomfortable. On account deletion: "all of their videos are
automatically moved into a folder in the shared workspace titled 'moved content - user email'.
**Share links and embeds for this content continue to work.**" And separately: "Content migration
only applies to videos and templates in My Videos. **It does not include personal avatars.**"
https://help.synthesia.io/en/articles/10291447-what-happens-to-a-workspace-member-s-content-when-their-account-is-deleted

**So the leaver's avatar does not transfer to the employer, but every video already made with their
face does, and the links keep working.** The off-boarding guide adds that Synthesia support will
migrate a departed person's content on written authorisation from "the contract signee, a C-level
executive, or the head of procurement" - **the departing individual is not consulted.**

**And revocation has a hard ceiling even for the professional actors.** When a Synthesia stock actor
opts out: "All existing generated videos created with a retired avatar or voice will remain
accessible and functional in your library." Opting out stops future generation. It does not retract
what already exists. https://help.synthesia.io/en/articles/11179378-what-happens-when-an-avatar-or-voice-is-retired

**Four absences worth naming in the course, because a learner will assume otherwise:**

1. **No vendor publishes a consent expiry or re-consent cadence.** D-ID states its consent recording
   "can be reused for future avatars" - one recording, unlimited future avatars, no re-affirmation.
2. **No vendor except Synthesia says what happens to already-published video when consent is
   revoked**, and Synthesia's answer is that it stays up.
3. **D-ID publishes no biometric notice at all**, despite running face and voice matching through a
   third party.
4. **HeyGen's moderation policy has not been revised since July 2024** and Synthesia's AUP not since
   February 2024 - both predate the EU AI Act transparency obligations that Synthesia's own current
   terms now reference.

**One more that is worth a slow read.** HeyGen's biometric notice states: "Where biometric data has
been irreversibly incorporated into model weights in a non-extractable form, it is no longer
considered personal data within the meaning of Article 4(1) GDPR."
https://www.heygen.com/biometric-privacy-notice (updated 5 May 2026) **That is HeyGen's stated legal
position, not settled law.** Present it as the company's position and say so.

## Documented misuse, graded by how well it is sourced

The course teaches learners to grade evidence, so grade it here too.

**Arup, Hong Kong - Grade A.** January 2024. A finance employee joined a video conference in which
the CFO and several colleagues were all synthetic, and made **15 transfers to 5 accounts totalling
HK$200 million, about US$25 million**. Arup confirmed on the record that it "notified the police
about an incident of fraud" and that "fake voices and images were used". Hong Kong Police confirmed
the case and said it was the first bogus video conference call of its kind they had encountered.
Named victim on the record plus police confirmation.
https://www.scmp.com/news/hong-kong/law-and-crime/article/3263151/uk-multinational-arup-confirmed-victim-hk200-million-deepfake-scam-used-digital-version-cfo-dupe

**LastPass - Grade A, and the better teaching case.** 10 April 2024, disclosed by LastPass itself
the same day. An employee "received a series of calls, texts, and at least one voicemail featuring
an audio deepfake from a threat actor impersonating our CEO via WhatsApp". The employee spotted two
markers - contact "outside of normal business communication channels" and forced urgency - ignored
it, and reported it. "There was no impact to our company."
https://blog.lastpass.com/posts/attempted-audio-deepfake-call-targets-lastpass-employee
**This one is worth more than Arup, because it shows the defence working and names what the
employee actually noticed.**

**WPP - Grade A.** May 2024. Attackers built a WhatsApp account from a public photo of CEO Mark
Read, set up a Teams meeting, and used a voice clone plus YouTube footage while impersonating Read
in the meeting chat. Read to staff: "Fortunately the attackers were not successful." A WPP
spokesperson on the record: "Thanks to the vigilance of our people... the incident was prevented."
https://incidentdatabase.ai/cite/983/

**Ferrari - Grade B, and say so.** July 2026 reporting by Bloomberg: an executive killed the attack
by asking the caller the title of a book CEO Benedetto Vigna had recommended days earlier. Great
story. **But Ferrari declined to comment and the account rests on unnamed sources.** Say "reported
by Bloomberg", never "Ferrari confirmed."

**Graphika, "Deepfake It Till You Make It" - Grade A, and the one that matters most for this
course.** Published February 2023. Verbatim: "this was the first time we observed a state-aligned
operation promoting video footage of AI-generated fictitious people." The pro-Chinese Spamouflage
operation ran a fictitious outlet called **Wolf News** whose presenters Graphika traced by reverse
image search to **Synthesia stock avatars named "Anna" and "Jason"** - the same faces appearing in
unrelated marketing videos, including one where the male presenter says "Hello, my name is Mr.
Cruise. And I'm an avatar."

**Two details make this the anchor case.** First: "Synthesia's products can create AI-generated
videos in a matter of minutes and subscriptions start at $30 per month." Second, and better:
**"none of the identified Spamouflage videos received more than 300 views."** A state-aligned
influence operation, using the exact consumer tool this course teaches, at consumer prices - and it
did not work. https://public-assets.graphika.com/reports/graphika-report-deepfake-it-till-you-make-it.pdf

**Do not use an FBI or FinCEN dollar figure for deepfake fraud.** Both agencies published alerts -
IC3 Alert I-120324-PSA (3 December 2024) and FinCEN FIN-2024-Alert004 (13 November 2024) - and
**neither publishes a loss total or incident count** for deepfake-enabled fraud. FinCEN says only
that relevant SARs have "increased" since 2023. Any circulating "FBI data on deepfake losses" figure
is unsourced. https://www.ic3.gov/PSA/2024/PSA241203 · https://fincen.gov/news/news-releases/fincen-issues-alert-fraud-schemes-involving-deepfake-media-targeting-financial

**IC3's actual defence advice is the quotable part:** "Create a secret word or phrase with your
family to verify their identity", and "Verify the identity of the person calling you by hanging up
the phone, researching the contact of the bank or organization purporting to call you, and call the
phone number directly."

## The asymmetry, and its two numbers

Both of these are used on the session 5 page and both belong here rather than only in the sibling
Media course map, where they were first recorded.

**Three seconds is enough to clone a voice.** Microsoft VALL-E, "Neural Codec Language Models are
Zero-Shot Text to Speech Synthesizers", arXiv 2301.02111, 5 January 2023: the system "can be used to
synthesize high-quality personalized speech with only a **3-second enrolled recording** of an unseen
speaker as an acoustic prompt". Trained on 60,000 hours of English speech. **It preserves the
speaker's emotional tone and acoustic environment, not just timbre**, which is why a cloned voice
survives a phone-call context convincingly. https://arxiv.org/abs/2301.02111

**And the consequence, in the one case with a published number.** The FCC proposed and then adopted a
**$6 million forfeiture** against political consultant Steve Kramer for the 21 January 2024 robocall
carrying "a deepfake audio recording of President Biden's cloned voice telling prospective voters not
to vote" in the New Hampshire primary. The charge was the **Truth in Caller ID Act**, for malicious
caller-ID spoofing, **not** the TCPA. The Notice of Apparent Liability was FCC 24-59, dated 23 May
2026; the forfeiture order followed on 26 September 2024.
https://docs.fcc.gov/public/attachments/DOC-402762A1.pdf

**Sourcing note the page must respect:** the 26 September 2024 forfeiture date comes from secondary
reporting; the forfeiture order itself was not opened. The proposal, the amount and the statute are
all first-party from the FCC PDF.

**Three seconds of enrolled audio against a $6 million federal forfeiture is the whole asymmetry of
the problem in two numbers**, and that is how session 5 closes.

**The related ruling, for context:** FCC Declaratory Ruling 24-17, in force 8 February 2024,
unanimous, holds that AI-generated and cloned voices are "artificial" under the TCPA, which "makes
voice cloning technology used in common robocall scams targeting consumers illegal".
https://docs.fcc.gov/public/attachments/DOC-400393A1.pdf

## The cleanest learning-outcome study yet found

**Arkun-Kocadere and Caglar Ozhan 2024, "Video Lectures With AI-Generated Instructors: Low Video
Engagement, Same Performance as Human Instructors", IRRODL 25(3).**
https://doi.org/10.19173/irrodl.v25i3.7815

Design: 108 undergraduates, 48 with an AI-generated instructor, 52 with a human instructor, 8 in a
focus group who saw both. Two 10-minute videos over two weeks. Video Engagement Scale post-test,
Academic Performance Test pre and post.

Findings, verbatim: "learners' video engagement was higher in the course with the human instructor",
but "**the instructor type did not have a significant effect on academic performance**." And from
the focus group: "students thought the AI-generated instructor caused distraction, discomfort, and
disconnectedness. However, when the video lesson topic was interesting or when students focused on
the video with the intention of learning, these feelings could be ignored."

**Engagement drops. Measured learning does not.** That is the single most useful sentence for anyone
deciding whether to put an avatar in front of learners, and it lines up with Mayer's image principle
(d = 0.22) rather than contradicting it.

Corroborating meta-analysis: Castro-Alonso, Wong, Adesope and Paas 2021, 32 effect sizes, N = 2,104,
**overall g+ = 0.20** for learning with a pedagogical agent versus without - small but positive.
https://doi.org/10.1007/s10648-020-09587-1

## Tool specs, verified 2026-08-26

**HeyGen.** Free $0 (3 videos/month, 1 min, watermarked); Creator $29/mo (600 credits, 30 min,
1080p); Pro $49/mo (1,000 credits, 4K); Business $149/mo + $20/seat; Enterprise custom. Avatar slot
add-ons $29/month or $300/year, each covering **up to 500 "looks" for one individual from one
consent video**, redoable once per billing cycle. Avatar V is the flagship: **15-second webcam
recording**, 175+ languages, no cap on output length. https://www.heygen.com/pricing ·
https://help.heygen.com/en/articles/9380615-digital-twin-faq · https://www.heygen.com/avatars/avatar-v

**D-ID is alive and was the acquirer, not the acquired** - a correction worth having. It bought
Berlin explainer-video company **simpleshow**, announced 16 September 2025, and operates the
combined company under the D-ID brand. Studio annual pricing: Trial $0/14 days (3 min, full-screen
watermark), Lite $4.7/mo, Pro $16/mo (3 personal avatars, 1 voice clone), Advanced $108/mo (100 min),
Enterprise custom. Billing quirk worth teaching: "The length of the video is rounded up to the
nearest 15-second interval" and "unused minutes become void."
https://www.d-id.com/news/d-id-announces-simpleshow-acquisition-to-create-a-digital-human-and-ai-video-powerhouse/ ·
https://www.d-id.com/pricing/studio/

**Synthesia personal avatar:** 1 to 5 minutes of footage, single continuous take, 2GB max.
**Its docs now say 31 languages, not 33** - one of the two figures is stale, so state the docs
figure and date it. https://docs.synthesia.io/docs/personal-avatars

**Synthesia Academy is the only vendor academy with a real certification** (Intro to Synthesia, plus
the FOCA framework cert). HeyGen Academy is free but has no certification and publishes no
durations. Neither publishes course durations at all. https://academy.synthesia.io/pages/synthesia-certified

## Do not state as fact (unverified at time of writing)

**Pending a second research pass, and NOT to appear on any page until it lands:** the EU AI Act
Article 50 text, its obligations and the date it applies from; any platform labelling policy
(YouTube, TikTok, Meta, LinkedIn); any US state law on synthetic likeness including its litigation
status; C2PA and whether any of these vendors sign their outputs with Content Credentials; the
Arup, Ferrari, WPP and LastPass impersonation cases and their reporting grades; any FBI IC3 or
FinCEN figure; official vendor learning paths.

**Individually unverified:** HeyGen's actual on-screen webcam consent script. D-ID's consent
statement wording. Whether deleting an avatar removes already-generated videos at any vendor.
Government-ID verification at any vendor. The Diel et al. percentages at source. The Deadline
reporting on Dan Dewhirst. H&M's digital-twin remuneration terms. Coca-Cola and Valentino backlash
cases. Vendor internal contradictions on avatar counts, language counts and credit rates are
recorded above as contradictions, not resolved.
