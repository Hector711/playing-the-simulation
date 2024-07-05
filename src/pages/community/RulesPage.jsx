import ModelMain from '@/layouts/ModelMain';

export default function RulesPage() {
  return (
    <ModelMain
      id='rules-page'
      className='community-common'
      title='Normas de la comunidad'
    >
      <section className='community' id='rules-container'>
        {communityRules.map((item, i) => (
          <WideItem key={i} i={i} {...item} />
        ))}
      </section>
    </ModelMain>
  );
}
const communityRules = [
  { rule: 'En las fotos de avatar se debe reconocer la cara del usuario.' },
  { rule: 'Las fotos de avatar de PTS y Telegram deben ser las mismas' },
  { rule: 'Nombres en PTS y Telegram deben ser los mismos.' }
];
function WideItem({ rule, i }) {
  return (
    <article className='wide-items blurr shadoww'>
      <span>{i + 1}.</span><p>{rule}</p>
    </article>
  );
}
