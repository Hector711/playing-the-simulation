import ModelMain from '@/layouts/ModelMain';

export default function RulesPage() {
  return (
    <ModelMain id='rules-page' className='community-common' title='Normas de la comunidad'>
      <article className='community' id='rules-page'>
        <h3>Normas a seguir en la comunidad</h3>
        <ul>
          {communityRules.map(({ rule }, i) => (
            <li key={i}>
              <h4>{i + 1}.</h4> <p>{rule}</p>
            </li>
          ))}
        </ul>
      </article>
    </ModelMain>
  );
}
const communityRules = [
  { rule: 'No se permitirán sindicalistas, ni socialistas.' },
  { rule: 'En las fotos de avatar se debe reconocer la cara del usuario.' },
  { rule: 'Las fotos de avatar de PTS y Telegram deben ser las mismas' },
  { rule: 'Nombres en PTS y Telegram deben ser los mismos.' },
  { rule: 'Los post de categoria Afterwork no aportarán puntos.' },
  {
    rule: 'Los post de categoria Afterwork se eliminarán una determinada cantidad de tiempo, y no aportarán puntos para subir de nivel.',
  },
];
