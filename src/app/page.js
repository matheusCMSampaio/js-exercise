import Image from 'next/image'

export default function Home() {
  const lista = [
    {nome: "Matheus", idade: 12, aluno: true}, 
    {nome: "Vini", idade: 18, aluno: false}
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next.js</h1>
      <ul>
        {
        lista.map(
          (aluno) => (
            <li key={aluno.nome}>
              {aluno.nome} - {aluno.idade} - {aluno.aluno? 'É aluno':'Não é aluno'}
            </li>
          )
        )
        }
      </ul>
    </main>
  )
}
