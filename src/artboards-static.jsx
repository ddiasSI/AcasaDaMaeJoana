import React from 'react';
import { BrandPot, BrandHeart, BrandSparkle, Logo, BranchDeco, PolkaDots, WhatsAppIcon, InstaIcon } from './brand.jsx';
// Static brand artboards: business card, hang tag, stickers, thank-you card, story templates

const BusinessCardFront = () => (
  <div style={{
    width: 600, height: 360, background: 'var(--cream)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    position: 'relative', overflow: 'hidden',
  }}>
    <div style={{ position: 'absolute', top: -30, right: -30, color: 'var(--rose-soft)' }}>
      <PolkaDots rows={4} cols={4} size={10} gap={6} pattern="fade-corner" />
    </div>
    <div style={{ position: 'absolute', bottom: -40, left: -30, color: 'var(--rose-soft)', transform: 'rotate(180deg)' }}>
      <PolkaDots rows={3} cols={3} size={8} gap={5} pattern="fade-corner" />
    </div>
    <Logo size={70} />
    <div className="serif" style={{ marginTop: 20, fontSize: 16, fontStyle: 'italic', color: 'var(--ink-soft)' }}>
      cozinha de conforto · bolos com história
    </div>
    <BrandHeart size={20} color="var(--rose)" />
  </div>
);

const BusinessCardBack = () => (
  <div style={{
    width: 600, height: 360, background: 'var(--rose)', color: 'white',
    padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    position: 'relative', overflow: 'hidden',
  }}>
    <div style={{ position: 'absolute', right: -10, top: -10, color: 'rgba(255,255,255,0.25)' }}>
      <PolkaDots rows={5} cols={5} size={14} gap={8} />
    </div>
    <div>
      <div className="serif-bold" style={{ fontSize: 28, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
        Joana Dias
      </div>
      <div style={{ fontSize: 13, opacity: 0.85, marginTop: 4, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
        Fundadora · cozinheira
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, position: 'relative', zIndex: 2 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <WhatsAppIcon size={16} color="white" />
        <span>+351 91 577 15 12</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <InstaIcon size={16} color="white" />
        <span>@acasadamaejoana_dias</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, opacity: 0.85 }}>
        <span style={{ width: 16, textAlign: 'center' }}>✱</span>
        <span>encomendas até quinta-feira · entregas sex/sáb</span>
      </div>
    </div>
  </div>
);

const HangTag = () => (
  <div style={{
    width: 280, height: 420, background: 'var(--cream)',
    borderRadius: '12px', position: 'relative',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    padding: '40px 24px 28px', overflow: 'hidden',
    boxShadow: '0 1px 0 rgba(0,0,0,0.04)',
  }}>
    {/* punch hole */}
    <div style={{
      position: 'absolute', top: 16, left: '50%', transform: 'translateX(-50%)',
      width: 16, height: 16, borderRadius: '50%',
      background: '#fff', boxShadow: 'inset 0 0 0 2px var(--line)',
    }} />
    <div style={{ marginTop: 12 }}>
      <BrandPot size={56} color="var(--rose)" stroke={2.6} />
    </div>
    <div className="serif-bold" style={{
      marginTop: 14, fontSize: 14, color: 'var(--rose)',
      textTransform: 'uppercase', letterSpacing: '0.2em', textAlign: 'center', lineHeight: 1.3,
    }}>
      Casa da<br/>Mãe Joana
    </div>
    <div style={{ width: 40, height: 1, background: 'var(--rose-soft)', margin: '18px 0' }} />
    <div className="handwritten" style={{ fontSize: 22, color: 'var(--ink)', textAlign: 'center', lineHeight: 1.2 }}>
      Para a<br/><em>Maria</em>
    </div>
    <div style={{ flex: 1 }} />
    <div style={{ fontSize: 10, color: 'var(--ink-soft)', textAlign: 'center', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
      feito com <BrandHeart size={10} color="var(--rose)" /> em Lisboa
    </div>
  </div>
);

const ThankYouCard = () => (
  <div style={{
    width: 560, height: 380, background: 'var(--paper)',
    padding: '50px 56px', position: 'relative', overflow: 'hidden',
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ position: 'absolute', top: -10, right: -20 }}>
      <BranchDeco width={260} opacity={0.5} />
    </div>
    <div style={{ position: 'absolute', bottom: -30, left: -30, transform: 'rotate(180deg)' }}>
      <BranchDeco width={220} opacity={0.4} flip />
    </div>
    <div style={{ position: 'relative', zIndex: 2 }}>
      <BrandPot size={48} color="var(--rose)" stroke={2.4} />
    </div>
    <div className="serif" style={{
      fontSize: 44, color: 'var(--ink)', marginTop: 18, lineHeight: 1.05, position: 'relative', zIndex: 2,
    }}>
      Obrigada por<br/>
      <em style={{ color: 'var(--rose)' }}>partilhar a mesa</em><br/>
      connosco.
    </div>
    <div style={{ flex: 1 }} />
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative', zIndex: 2 }}>
      <div className="handwritten" style={{ fontSize: 22, color: 'var(--rose-deep)' }}>
        — Joana
      </div>
      <BrandHeart size={28} color="var(--rose)" />
    </div>
  </div>
);

const StickerSet = () => {
  const stickers = [
    { color: 'var(--rose)', text: 'feito\ncom amor', bg: 'var(--rose)', fg: 'white' },
    { color: 'var(--cream)', text: 'casa da\nmãe joana', bg: 'var(--cream)', fg: 'var(--rose)', logo: true },
    { color: 'var(--paper)', text: 'manter\nrefrigerado', bg: 'var(--paper)', fg: 'var(--ink)', sub: '0–4°C', border: true },
    { color: 'var(--red)', text: 'lote\n0426', bg: 'var(--red)', fg: 'white', sub: 'val. 02.05' },
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 140px)', gap: 24, padding: 20 }}>
      {stickers.map((s, i) => (
        <div key={i} style={{
          width: 140, height: 140, borderRadius: '50%',
          background: s.bg, color: s.fg,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', position: 'relative',
          border: s.border ? '1.5px dashed var(--line)' : 'none',
          boxShadow: '0 6px 14px rgba(74,58,55,0.08)',
        }}>
          {s.logo && <BrandPot size={36} color="var(--rose)" stroke={2.4} />}
          <div className={s.logo ? 'serif-bold' : 'serif-bold'} style={{
            fontSize: s.logo ? 11 : 14,
            textTransform: 'uppercase', letterSpacing: '0.16em',
            whiteSpace: 'pre-line', marginTop: s.logo ? 6 : 0,
            lineHeight: 1.25,
          }}>
            {s.text}
          </div>
          {s.sub && (
            <div style={{ fontSize: 10, opacity: 0.85, marginTop: 6, letterSpacing: '0.1em' }}>
              {s.sub}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const InstagramPost = () => (
  <div style={{
    width: 540, height: 540, background: 'var(--cream)',
    padding: 50, position: 'relative', overflow: 'hidden',
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ position: 'absolute', top: -20, left: -20 }}>
      <BranchDeco width={280} opacity={0.45} />
    </div>
    <div style={{ position: 'absolute', bottom: -30, right: -30, transform: 'rotate(180deg)' }}>
      <BranchDeco width={240} opacity={0.4} />
    </div>

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
      <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--rose-deep)' }}>
        menu da semana
      </div>
      <div className="handwritten" style={{ fontSize: 22, color: 'var(--rose)' }}>
        nº 17 · maio
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 14, position: 'relative', zIndex: 2 }}>
      <BrandPot size={70} color="var(--rose)" stroke={2.4} />
      <div className="serif-bold" style={{ marginTop: 8, fontSize: 18, color: 'var(--rose)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        Casa da Mãe Joana
      </div>
    </div>

    <div style={{ flex: 1, marginTop: 26, display: 'flex', flexDirection: 'column', gap: 9, position: 'relative', zIndex: 2 }}>
      {[
        ['Bacalhau à Brás', '25 €'],
        ['Massada de Tamboril e Camarão', '28 €'],
        ['Almôndegas com Esparguete', '25 €'],
        ['Caldo Verde', '10 €'],
        ['Bolo Chiffon de Chocolate', '15 €'],
        ['Torta de Morangos e Chantilly', '12 €'],
      ].map(([name, price], i) => (
        <div key={i} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          paddingBottom: 6, borderBottom: '1px dotted var(--rose-soft)',
        }}>
          <span className="serif" style={{ fontSize: 18, fontWeight: 600, color: 'var(--ink)' }}>{name}</span>
          <span className="serif" style={{ fontSize: 17, color: 'var(--rose-deep)' }}>{price}</span>
        </div>
      ))}
    </div>

    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, color: 'var(--ink-soft)', position: 'relative', zIndex: 2 }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <InstaIcon size={12} /> @acasadamaejoana_dias
      </span>
      <span>doses para 4 · encomendas até qui.</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <WhatsAppIcon size={12} /> 91 577 15 12
      </span>
    </div>
  </div>
);

const InstagramStory = () => (
  <div style={{
    width: 300, height: 533, background: 'var(--rose)', color: 'white',
    padding: 32, position: 'relative', overflow: 'hidden',
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ position: 'absolute', top: -20, right: -20, color: 'rgba(255,255,255,0.3)' }}>
      <PolkaDots rows={5} cols={5} size={14} gap={8} />
    </div>
    <div style={{ position: 'absolute', bottom: -20, left: -20, color: 'rgba(255,255,255,0.25)', transform: 'rotate(180deg)' }}>
      <PolkaDots rows={4} cols={4} size={12} gap={7} />
    </div>

    <div style={{ fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase', opacity: 0.85, position: 'relative', zIndex: 2 }}>
      esta semana ·
    </div>

    <div className="serif" style={{
      marginTop: 'auto', marginBottom: 'auto', fontSize: 48, lineHeight: 1.0, position: 'relative', zIndex: 2,
    }}>
      Bolo da<br/>
      <em>Maria</em>,<br/>
      <span style={{ fontSize: 24, fontStyle: 'normal', display: 'inline-block', marginTop: 14 }}>
        abóbora &<br/>laranja
      </span>
    </div>

    <div style={{ position: 'relative', zIndex: 2 }}>
      <div style={{ width: 30, height: 1, background: 'rgba(255,255,255,0.6)', marginBottom: 14 }} />
      <div className="handwritten" style={{ fontSize: 26, lineHeight: 1.1 }}>
        encomenda já →
      </div>
      <div style={{ fontSize: 11, opacity: 0.9, marginTop: 6, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
        deslize p/ cima
      </div>
    </div>
  </div>
);

const PriceMenuCard = () => (
  <div style={{
    width: 580, height: 580, background: 'var(--cream)',
    padding: 48, position: 'relative', overflow: 'hidden',
    display: 'flex', flexDirection: 'column',
  }}>
    <div style={{ position: 'absolute', top: 30, right: 38, opacity: 0.5 }}>
      <BrandHeart size={42} color="var(--rose-soft)" />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <BrandPot size={64} color="var(--rose)" stroke={2.4} />
      <div className="serif-bold" style={{ marginTop: 12, fontSize: 22, color: 'var(--rose)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
        Casa da Mãe Joana
      </div>
      <div style={{ marginTop: 4, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
        — refeições semanais —
      </div>
    </div>

    <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
      {[
        ['Croquetes com Arroz de Manteiga', '22 €'],
        ['Esparguete à Bolonhesa', '22 €'],
        ['Almôndegas com Esparguete / Puré', '25 €'],
        ['Lombinhos de Pescada Fritos c/ Arroz de Tomate', '25 €'],
        ['Feijoada', '22 €'],
        ['Bacalhau à Brás', '25 €'],
        ['Massada de Tamboril e Camarão', '28 €'],
        ['Caldo Verde', '10 €'],
      ].map(([name, price], i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span className="serif" style={{ fontWeight: 600, fontSize: 16 }}>{name}</span>
          <span className="serif" style={{ fontSize: 15, color: 'var(--rose-deep)' }}>{price}</span>
        </div>
      ))}
    </div>

    <div style={{ marginTop: 18, fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--rose-deep)', display: 'flex', alignItems: 'center', gap: 10 }}>
      <span style={{ flex: 1, height: 1, background: 'var(--rose-soft)' }} />
      bolos & doces
      <span style={{ flex: 1, height: 1, background: 'var(--rose-soft)' }} />
    </div>

    <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
      {[
        ['Torta de Morangos e Chantilly', '12 €'],
        ['Bolo da Maria · Abóbora & Laranja', '12 €'],
        ['Bolo Chiffon de Chocolate', '15 €'],
      ].map(([name, price], i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span className="serif" style={{ fontWeight: 600, fontSize: 16 }}>{name}</span>
          <span className="serif" style={{ fontSize: 15, color: 'var(--rose-deep)' }}>{price}</span>
        </div>
      ))}
    </div>

    <div style={{ flex: 1 }} />
    <div style={{ marginTop: 18, fontSize: 11, color: 'var(--ink-soft)', textAlign: 'center', fontStyle: 'italic' }}>
      preços para 4 pessoas · outras doses sob consulta
    </div>
  </div>
);

function Packaging() {
  return (
    <div style={{ width: 720, height: 480, background: 'linear-gradient(135deg, #EFEAE3 0%, #E8DCC9 100%)', padding: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div style={{ width: 260, height: 340, background: '#FBF8F2', boxShadow: '0 30px 60px rgba(74,58,55,0.15), inset 0 -8px 0 rgba(74,58,55,0.04)', padding: 36, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', borderRadius: '2px 2px 0 0' }}>
        <div style={{ position: 'absolute', top: -16, left: 30, right: 30, height: 8, background: '#F0E8DC', borderRadius: '50%/100% 100% 0 0' }} />
        <div style={{ position: 'absolute', top: -40, left: 60, width: 50, height: 60, borderTop: '3px solid var(--ink-soft)', borderLeft: '3px solid var(--ink-soft)', borderRight: '3px solid var(--ink-soft)', borderRadius: '40px 40px 0 0', opacity: 0.4 }} />
        <div style={{ position: 'absolute', top: -40, right: 60, width: 50, height: 60, borderTop: '3px solid var(--ink-soft)', borderLeft: '3px solid var(--ink-soft)', borderRight: '3px solid var(--ink-soft)', borderRadius: '40px 40px 0 0', opacity: 0.4 }} />
        <div style={{ marginTop: 60 }}><BrandPot size={70} color="var(--rose)" stroke={2.4} /></div>
        <div className="serif-bold" style={{ fontSize: 13, color: 'var(--rose)', letterSpacing: '0.22em', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.3, marginTop: 14 }}>Casa da<br/>Mãe Joana</div>
        <div style={{ flex: 1 }} />
        <div style={{ width: 30, height: 1, background: 'var(--rose-soft)', marginBottom: 8 }} />
        <div className="handwritten" style={{ fontSize: 18, color: 'var(--rose-deep)' }}>com carinho</div>
      </div>
      <div style={{ position: 'absolute', top: 80, right: 110, width: 90, height: 90, borderRadius: '50%', background: 'var(--rose)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-12deg)', boxShadow: '0 8px 16px rgba(232,132,124,0.3)' }}>
        <div className="serif-bold" style={{ fontSize: 11, textAlign: 'center', letterSpacing: '0.16em', lineHeight: 1.3 }}>FRESCO<br/>HOJE<br/>♡</div>
      </div>
    </div>
  );
}



function LogoLockups() {
  return (
    <div style={{ width: 920, padding: 50, background: 'var(--paper)' }}>
      <div style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--rose-deep)' }}>identidade</div>
      <div className="serif" style={{ fontSize: 40, marginTop: 8, marginBottom: 36, lineHeight: 1.0 }}>O <em style={{ color: 'var(--rose)' }}>símbolo</em></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
        <div style={{ background: 'var(--cream)', padding: 50, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 280 }}>
          <Logo size={120} />
        </div>
        <div style={{ background: 'var(--rose)', padding: 50, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 280 }}>
          <Logo size={120} mono />
        </div>
        <div style={{ background: 'var(--paper)', padding: 50, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 200, border: '1px solid var(--line)' }}>
          <Logo size={70} stack={false} />
        </div>
        <div style={{ background: 'var(--ink)', padding: 50, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', height: 200 }}>
          <div style={{ color: 'white' }}><Logo size={70} stack={false} mono /></div>
        </div>
      </div>
    </div>
  );
}

function VoiceTone() {
  const pairs = [
    { yes: 'A feijoada de hoje', no: 'Feijoada à venda' },
    { yes: 'Encomende até quinta', no: 'Pedidos aceites até 16h de quinta-feira' },
    { yes: 'Para 4 pessoas (com fome)', no: 'Doses individuais 4x' },
    { yes: 'Bolo da Maria', no: 'Bolo de abóbora premium' },
  ];
  return (
    <div style={{ width: 720, padding: 50, background: 'var(--cream)' }}>
      <div style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--rose-deep)' }}>voz da marca</div>
      <div className="serif" style={{ fontSize: 40, marginTop: 8, lineHeight: 1.0 }}>Como <em style={{ color: 'var(--rose)' }}>falamos</em></div>
      <div style={{ marginTop: 30, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {pairs.map((p, i) => (
          <div key={i} style={{ background: 'var(--paper)', borderRadius: 6, padding: 18, border: '1px solid var(--line)' }}>
            <div style={{ fontSize: 10, color: 'var(--rose-deep)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 6 }}>✓ assim</div>
            <div className="serif" style={{ fontSize: 18, fontWeight: 600 }}>{p.yes}</div>
            <div style={{ fontSize: 10, color: 'var(--ink-soft)', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 14, marginBottom: 6 }}>✗ não assim</div>
            <div style={{ fontSize: 14, color: 'var(--ink-soft)', textDecoration: 'line-through' }}>{p.no}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { BusinessCardFront, BusinessCardBack, HangTag, ThankYouCard, StickerSet, InstagramPost, InstagramStory, PriceMenuCard, LogoLockups, VoiceTone, Packaging };
