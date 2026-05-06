import React from 'react';
import { BrandPot, BrandHeart, BranchDeco, PolkaDots, WhatsAppIcon, InstaIcon, Logo } from './brand.jsx';
// Desktop landing page for casadamaejoana.pt — hero, weekly menu, cake gallery, WhatsApp contact

const DesktopLanding = () => {
  const [activeTab, setActiveTab] = React.useState('refeicoes');
  return (
    <div style={{ width: 1280, background: 'var(--paper)', fontFamily: 'Inter, sans-serif', overflow: 'hidden' }}>
      {/* Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 10,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 60px', background: 'rgba(251,247,242,0.92)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid var(--line)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <BrandPot size={36} color="var(--rose)" stroke={2.4} />
          <div className="serif-bold" style={{ fontSize: 14, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--rose)' }}>
            Casa da Mãe Joana
          </div>
        </div>
        <div style={{ display: 'flex', gap: 36, alignItems: 'center', fontSize: 13, color: 'var(--ink)' }}>
          <a style={{ cursor: 'pointer' }}>Menu da semana</a>
          <a style={{ cursor: 'pointer' }}>Bolos</a>
          <a style={{ cursor: 'pointer' }}>A nossa história</a>
          <a style={{ cursor: 'pointer' }}>Encomendas</a>
          <button style={{
            background: 'var(--rose)', color: 'white', border: 'none',
            padding: '10px 22px', borderRadius: 24, fontSize: 13, fontWeight: 600,
            cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
            letterSpacing: '0.04em',
          }}>
            <WhatsAppIcon size={14} color="white" />
            Encomendar
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ position: 'relative', padding: '80px 60px 60px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 30, right: 60, opacity: 0.6 }}>
          <BranchDeco width={420} opacity={0.5} />
        </div>
        <div style={{ position: 'absolute', bottom: -40, left: -20, transform: 'rotate(180deg)' }}>
          <BranchDeco width={360} opacity={0.4} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 60, alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <div>
            <div className="handwritten" style={{ fontSize: 28, color: 'var(--rose-deep)' }}>
              cozinha portuguesa, com tempo
            </div>
            <h1 className="serif" style={{
              fontSize: 88, lineHeight: 0.98, margin: '14px 0 0', color: 'var(--ink)', letterSpacing: '-0.01em',
            }}>
              Refeições<br/>
              de família,<br/>
              <em style={{ color: 'var(--rose)' }}>feitas em casa</em>
              <br/>para a sua.
            </h1>
            <p style={{ fontSize: 17, color: 'var(--ink-soft)', maxWidth: 480, lineHeight: 1.6, marginTop: 28 }}>
              Croquetes, bacalhau, bolo da Maria. Pratos de conforto e bolos decorados à mão, prontos para levantar à sexta e ao sábado em Lisboa.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
              <button style={{
                background: 'var(--rose)', color: 'white', border: 'none',
                padding: '16px 28px', borderRadius: 28, fontSize: 14, fontWeight: 600,
                letterSpacing: '0.04em', cursor: 'pointer',
                boxShadow: '0 8px 22px rgba(232,132,124,0.35)',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                Ver menu da semana →
              </button>
              <button style={{
                background: 'transparent', color: 'var(--rose)',
                border: '1.5px solid var(--rose)',
                padding: '16px 28px', borderRadius: 28, fontSize: 14, fontWeight: 600,
                letterSpacing: '0.04em', cursor: 'pointer',
              }}>
                Encomendar bolo
              </button>
            </div>

            <div style={{ marginTop: 44, display: 'flex', gap: 36, color: 'var(--ink-soft)', fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
              <span>· entregas qua–sáb</span>
              <span>· lisboa & arredores</span>
              <span>· encomendas até quinta</span>
            </div>
          </div>

          {/* Hero visual — stacked frames */}
          <div style={{ position: 'relative', height: 540 }}>
            <div style={{
              position: 'absolute', top: 0, right: 40, width: 280, height: 360,
              background: 'var(--cream)', borderRadius: 6,
              padding: 28, boxShadow: '0 24px 60px rgba(74,58,55,0.12)',
              transform: 'rotate(-3deg)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            }}>
              <BrandPot size={70} color="var(--rose)" stroke={2.4} />
              <div className="serif-bold" style={{ marginTop: 14, fontSize: 14, color: 'var(--rose)', letterSpacing: '0.22em', textTransform: 'uppercase', textAlign: 'center', lineHeight: 1.3 }}>
                Casa da<br/>Mãe Joana
              </div>
              <div style={{ marginTop: 24, fontSize: 11, color: 'var(--ink-soft)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                est. 2021 · Lisboa
              </div>
            </div>
            <div style={{
              position: 'absolute', bottom: 0, left: 0, width: 320, height: 380,
              background: 'var(--rose)', borderRadius: 6,
              padding: 28, color: 'white', boxShadow: '0 24px 60px rgba(232,132,124,0.35)',
              transform: 'rotate(4deg)', overflow: 'hidden',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ position: 'absolute', top: -10, right: -10, color: 'rgba(255,255,255,0.3)' }}>
                <PolkaDots rows={5} cols={5} size={14} gap={8} />
              </div>
              <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', opacity: 0.9 }}>
                bolo da semana
              </div>
              <div className="serif" style={{ marginTop: 'auto', fontSize: 38, lineHeight: 1.0 }}>
                Chiffon de<br/>chocolate &<br/><em>flor-de-sal</em>
              </div>
              <div className="handwritten" style={{ marginTop: 18, fontSize: 22 }}>
                a partir de 28€
              </div>
            </div>
            <div style={{
              position: 'absolute', top: 80, left: 200, width: 100, height: 100,
              borderRadius: '50%', background: 'var(--cream-soft)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transform: 'rotate(-8deg)',
              boxShadow: '0 12px 30px rgba(74,58,55,0.1)',
            }}>
              <div className="serif-bold" style={{ fontSize: 11, color: 'var(--rose)', textAlign: 'center', letterSpacing: '0.16em', lineHeight: 1.3 }}>
                FEITO<br/>COM<br/>♡
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section style={{ padding: '80px 60px', background: 'var(--cream)', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--rose-deep)' }}>
              · semana 19 · 4–10 maio
            </div>
            <h2 className="serif" style={{ fontSize: 56, lineHeight: 1.0, marginTop: 12, color: 'var(--ink)' }}>
              O que cozinhamos<br/>esta semana
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 4, padding: 4, background: 'rgba(255,255,255,0.6)', borderRadius: 24 }}>
            {[['refeicoes', 'Refeições'], ['bolos', 'Bolos & doces']].map(([id, l]) => (
              <button key={id} onClick={() => setActiveTab(id)} style={{
                padding: '10px 20px', borderRadius: 20,
                background: activeTab === id ? 'var(--rose)' : 'transparent',
                color: activeTab === id ? 'white' : 'var(--ink)',
                border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500,
              }}>{l}</button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {(activeTab === 'refeicoes' ? [
            { name: 'Croquetes com Arroz de Manteiga', price: 22, sub: 'tradicional, dourado' },
            { name: 'Bacalhau à Brás', price: 25, sub: 'bacalhau demolhado em casa' },
            { name: 'Massada de Tamboril e Camarão', price: 28, sub: 'caldo apurado, fresco' },
            { name: 'Almôndegas com Esparguete', price: 25, sub: 'molho lentamente apurado' },
            { name: 'Feijoada à Transmontana', price: 22, sub: 'feijão vermelho' },
            { name: 'Caldo Verde', price: 10, sub: 'couves frescas, chouriço' },
          ] : [
            { name: 'Bolo da Maria', price: 12, sub: 'abóbora & laranja' },
            { name: 'Bolo Chiffon de Chocolate', price: 15, sub: 'fofo, ganache caseira' },
            { name: 'Torta de Morangos e Chantilly', price: 12, sub: 'morangos da época' },
            { name: 'Pão-de-ló de Ovar', price: 14, sub: 'húmido, dourado' },
            { name: 'Tarte de Limão Merengada', price: 16, sub: 'limão siciliano' },
            { name: 'Bolo de Cenoura', price: 11, sub: 'glaze de chocolate' },
          ]).map((d, i) => (
            <div key={i} style={{
              background: 'var(--paper)', borderRadius: 8, padding: 22,
              display: 'flex', flexDirection: 'column', cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              border: '1px solid rgba(232,220,201,0.7)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(74,58,55,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{
                width: '100%', aspectRatio: '4/3', borderRadius: 6,
                background: `repeating-linear-gradient(135deg, var(--cream-soft) 0 8px, var(--cream) 8px 16px)`,
                marginBottom: 18, display: 'flex', alignItems: 'flex-end', padding: 12,
                color: 'var(--ink-soft)', fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
                fontFamily: 'monospace',
              }}>
                fotografia · {d.name.toLowerCase()}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 className="serif" style={{ fontSize: 20, margin: 0, fontWeight: 600 }}>{d.name}</h3>
                <span className="serif" style={{ fontSize: 18, color: 'var(--rose-deep)', fontWeight: 600 }}>{d.price} €</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--ink-soft)', marginTop: 6 }}>{d.sub}</div>
              <button style={{
                marginTop: 16, padding: '8px 14px', alignSelf: 'flex-start',
                background: 'transparent', border: '1px solid var(--line)',
                borderRadius: 18, fontSize: 12, color: 'var(--ink)', cursor: 'pointer',
              }}>
                + adicionar
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 28, fontSize: 12, color: 'var(--ink-soft)', textAlign: 'center', fontStyle: 'italic' }}>
          · doses de referência para 4 pessoas · outras quantidades sob consulta ·
        </div>
      </section>

      {/* Story strip */}
      <section style={{ padding: '90px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div style={{ position: 'relative', height: 460 }}>
          <div style={{
            position: 'absolute', top: 0, left: 20, width: 320, height: 400,
            background: `repeating-linear-gradient(45deg, var(--cream) 0 10px, var(--cream-soft) 10px 20px)`,
            borderRadius: 4,
            display: 'flex', alignItems: 'flex-end', padding: 16,
            color: 'var(--ink-soft)', fontSize: 10, fontFamily: 'monospace', letterSpacing: '0.16em', textTransform: 'uppercase',
          }}>
            retrato · joana na cozinha
          </div>
          <div style={{
            position: 'absolute', bottom: 0, right: 0, width: 240, height: 320,
            background: 'var(--rose)', borderRadius: 4, padding: 28, color: 'white',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            transform: 'rotate(3deg)',
          }}>
            <BrandHeart size={32} color="white" />
            <div className="handwritten" style={{ fontSize: 24, lineHeight: 1.15 }}>
              "comida que sabe<br/>a infância e a casa"
            </div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.9 }}>
              — Joana
            </div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--rose-deep)' }}>
            a nossa história
          </div>
          <h2 className="serif" style={{ fontSize: 56, lineHeight: 1.0, marginTop: 12, color: 'var(--ink)' }}>
            Tudo começou<br/>numa cozinha<br/><em style={{ color: 'var(--rose)' }}>de Lisboa</em>.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.7, marginTop: 24, maxWidth: 480 }}>
            A Casa da Mãe Joana nasceu da memória dos almoços de domingo — daqueles que se demoram à mesa, com bacalhau no forno e bolo da Maria a sair quente.
          </p>
          <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.7, marginTop: 16, maxWidth: 480 }}>
            Hoje cozinhamos para outras famílias — pratos honestos, ingredientes da feira, e bolos decorados à mão para os dias que merecem ser doces.
          </p>
        </div>
      </section>

      {/* Cake commission */}
      <section style={{ padding: '80px 60px', background: 'var(--rose)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -30, right: -30, color: 'rgba(255,255,255,0.18)' }}>
          <PolkaDots rows={7} cols={7} size={18} gap={10} />
        </div>
        <div style={{ position: 'absolute', bottom: -40, left: -20, color: 'rgba(255,255,255,0.15)', transform: 'rotate(180deg)' }}>
          <PolkaDots rows={5} cols={5} size={14} gap={8} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, position: 'relative', zIndex: 2, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', opacity: 0.9 }}>
              bolos por encomenda
            </div>
            <h2 className="serif" style={{ fontSize: 64, lineHeight: 0.98, marginTop: 14, color: 'white' }}>
              Bolos para os<br/>dias que ficam<br/><em>na memória</em>.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, marginTop: 24, opacity: 0.92, maxWidth: 480 }}>
              Aniversários, batizados, despedidas. Diga-nos o sabor, a ocasião e a mensagem — fazemos o bolo à medida e entregamos pronto a soprar a vela.
            </p>
            <button style={{
              marginTop: 32, padding: '16px 32px', borderRadius: 28,
              background: 'white', color: 'var(--rose)',
              border: 'none', fontSize: 14, fontWeight: 700, letterSpacing: '0.04em', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}>
              Começar encomenda →
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {[
              { name: 'Aniversários', count: '12+ sabores' },
              { name: 'Batizados', count: 'decorações suaves' },
              { name: 'Casamentos', count: 'multi-andares' },
              { name: 'Personalizados', count: 'imagem comestível' },
            ].map((c, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(4px)',
                borderRadius: 8, padding: 24, aspectRatio: '1',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                border: '1px solid rgba(255,255,255,0.2)',
              }}>
                <BrandHeart size={24} color="rgba(255,255,255,0.7)" />
                <div>
                  <div className="serif" style={{ fontSize: 22, fontWeight: 600 }}>{c.name}</div>
                  <div style={{ fontSize: 11, opacity: 0.8, marginTop: 4, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{c.count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sabores e Recheios — full inline card */}
      <section style={{ padding: '90px 60px', background: 'var(--paper)', position: 'relative' }}>
        <div style={{
          maxWidth: 1160, margin: '0 auto',
          background: 'var(--cream)',
          padding: '60px 56px 44px',
          position: 'relative', overflow: 'hidden',
          borderRadius: 12,
        }}>
          {/* Decorative branches */}
          <div style={{ position: 'absolute', top: -10, right: -10, opacity: 0.45, transform: 'rotate(8deg)', pointerEvents: 'none' }}>
            <BranchDeco width={320} opacity={1} />
          </div>
          <div style={{ position: 'absolute', bottom: -20, left: -20, opacity: 0.45, transform: 'rotate(195deg)', pointerEvents: 'none' }}>
            <BranchDeco width={280} opacity={1} />
          </div>

          {/* Header */}
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <BrandPot size={64} color="var(--rose)" stroke={2.4} />
            <div className="serif" style={{ marginTop: 10, fontSize: 14, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--rose)', fontWeight: 600 }}>
              Casa da Mãe Joana
            </div>
            <div style={{ marginTop: 22, fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: 'var(--rose-deep)' }}>
              — bolos por encomenda —
            </div>
            <h2 className="serif" style={{ margin: '8px 0 0', fontWeight: 500, fontSize: 56, lineHeight: 1, color: 'var(--ink)' }}>
              Sabores e <em style={{ color: 'var(--rose)', fontStyle: 'italic' }}>recheios</em><br/>disponíveis
            </h2>
            <div style={{ marginTop: 12, fontSize: 14, color: 'var(--ink-soft)', fontStyle: 'italic' }}>
              escolha a sua massa, recheio e cobertura · doses para todas as ocasiões
            </div>
          </div>

          {/* 3 columns */}
          <div style={{
            marginTop: 38, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 22, position: 'relative', zIndex: 2,
          }}>
            {[
              {
                title: 'Massas', badge: 'base',
                note: 'o ponto de partida — incluído no preço base',
                items: [
                  { t: 'Chiffon' }, { t: 'Chiffon de chocolate' }, { t: 'Chocolate' }, { t: 'Laranja' },
                  { t: 'Limão' }, { t: 'Limão intenso' }, { t: 'Iogurte' }, { t: 'Abóbora e laranja' },
                  { t: 'Noz e canela' }, { t: 'Cenoura' }, { t: 'Cenoura, laranja e côco' },
                  { t: 'Baunilha' }, { t: 'Red velvet' },
                ],
              },
              {
                title: 'Recheios', badge: '+3 € extra',
                note: 'um recheio incluído · cada adicional acresce 3 €',
                items: [
                  { t: 'Doce de leite' }, { t: 'Chantilly' }, { t: 'Cheesecake (neutro)' },
                  { t: 'Mascarpone e natas' }, { t: 'Corneto de morango' }, { t: 'Brigadeiro' },
                  { t: 'Brigadeiro de chocolate branco' }, { t: 'Brigadeiro de leite condensado' },
                  { t: 'Brigadeiro de doce de leite' }, { t: 'Brigadeiro de leite ninho' },
                  { t: 'Creme de chocolate com avelãs' }, { t: 'Ganache de chocolate' },
                  { t: 'Ganache de morango' }, { t: 'Doce de ovos' }, { t: 'Frutos secos' },
                  { t: 'Puré de fruta' }, { t: 'Frutas frescas' }, { t: 'Compotas de fruta' },
                ],
              },
              {
                title: 'Coberturas', badge: '+3 € extra',
                note: 'uma cobertura incluída · cada adicional acresce 3 €',
                items: [
                  { t: 'Chantilly' }, { t: 'Chantilly vegetal' },
                  { t: 'Enchanted cream', sub: 'sabe a chantilly' },
                  { t: 'Buttercream' },
                  { t: 'Buttercream com merengue suíço', extra: '+5 €', plus: true },
                  { t: 'Chocolate preto' }, { t: 'Chocolate de leite' }, { t: 'Granulado' },
                  { t: 'Frutas frescas' }, { t: 'Decorações de açúcar' },
                  { t: 'Frutos secos' }, { t: 'Flores comestíveis' },
                ],
              },
            ].map((col, ci) => (
              <div key={ci} style={{
                background: 'var(--paper)', borderRadius: 8,
                padding: '26px 24px 24px',
                border: '1px solid rgba(232,220,201,0.7)',
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                  marginBottom: 18, paddingBottom: 12,
                  borderBottom: '1px dotted var(--rose-soft)',
                }}>
                  <span className="serif" style={{ fontWeight: 600, fontSize: 24, color: 'var(--rose-deep)', letterSpacing: '0.04em' }}>
                    {col.title}
                  </span>
                  <span style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--rose)', fontWeight: 600 }}>
                    {col.badge}
                  </span>
                </div>
                <div style={{ fontSize: 11, color: 'var(--ink-soft)', fontStyle: 'italic', marginBottom: 14, lineHeight: 1.5 }}>
                  {col.note}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {col.items.map((item, i) => (
                    <li key={i} style={{
                      fontSize: 14, paddingLeft: 18, position: 'relative', lineHeight: 1.35,
                      color: item.plus ? 'var(--rose-deep)' : 'var(--ink)',
                      fontWeight: item.plus ? 600 : 400,
                    }}>
                      <span style={{
                        position: 'absolute', left: 0, top: 7, width: 6, height: 6,
                        borderRadius: '50%',
                        background: item.plus ? 'var(--rose)' : 'var(--rose-soft)',
                      }}></span>
                      {item.t}
                      {item.extra && <span style={{ fontSize: 11, color: 'var(--rose-deep)', marginLeft: 6, fontWeight: 600 }}>{item.extra}</span>}
                      {item.sub && <span style={{ fontSize: 11, color: 'var(--ink-soft)', fontStyle: 'italic', marginLeft: 6 }}>({item.sub})</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div style={{
            marginTop: 38, display: 'flex', flexDirection: 'column', alignItems: 'center',
            textAlign: 'center', position: 'relative', zIndex: 2, gap: 14,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--rose)', width: '100%', maxWidth: 380 }}>
              <span style={{ flex: 1, height: 1, background: 'var(--rose-soft)' }}></span>
              <BrandHeart size={22} color="var(--rose)" />
              <span style={{ flex: 1, height: 1, background: 'var(--rose-soft)' }}></span>
            </div>
            <div className="handwritten" style={{ fontSize: 26, color: 'var(--rose-deep)', lineHeight: 1 }}>
              escolha o seu, eu trato do resto
            </div>
            <a href="https://wa.me/351915771512" target="_blank" rel="noopener" style={{
              background: 'var(--rose)', color: 'white',
              padding: '14px 28px', borderRadius: 28,
              fontSize: 14, fontWeight: 600, letterSpacing: '0.04em',
              boxShadow: '0 6px 18px rgba(232,132,124,0.35)',
              textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 10,
            }}>
              <WhatsAppIcon size={16} color="white" />
              Encomende pelo WhatsApp
            </a>
            <div style={{
              display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center',
              fontSize: 12, color: 'var(--ink-soft)',
              letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 6,
            }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <WhatsAppIcon size={13} color="#25D366" />
                +351 91 577 15 12
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <InstaIcon size={13} color="var(--ink-soft)" />
                @acasadamaejoana_dias
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Footer */}
      <section style={{ padding: '80px 60px 40px', background: 'var(--paper)', position: 'relative' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: 40, paddingBottom: 50, borderBottom: '1px solid var(--line)',
        }}>
          <div>
            <Logo size={70} stack={false} />
            <p style={{ marginTop: 20, fontSize: 13, color: 'var(--ink-soft)', maxWidth: 320, lineHeight: 1.6 }}>
              Cozinha portuguesa de conforto e bolos decorados à mão. Encomendas até quinta-feira, entregas sexta e sábado.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 14 }}>
              menu
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
              <a>Refeições semanais</a>
              <a>Bolos por encomenda</a>
              <a>Catering</a>
              <a>Vouchers</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 14 }}>
              contacto
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <WhatsAppIcon size={14} /> +351 91 577 15 12
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <InstaIcon size={14} /> @acasadamaejoana_dias
              </span>
              <span>olá@casadamaejoana.pt</span>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 14 }}>
              levantamento
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
              <span>Lisboa, Campo de Ourique</span>
              <span>sex 14h–19h · sáb 10h–14h</span>
              <span>entregas sob consulta</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--ink-soft)' }}>
          <span>© 2026 Casa da Mãe Joana · feita com <BrandHeart size={10} color="var(--rose)" /> em Lisboa</span>
          <span>livro de reclamações · termos · privacidade</span>
        </div>
      </section>
    </div>
  );
};



export { DesktopLanding };
