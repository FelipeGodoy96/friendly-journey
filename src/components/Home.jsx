export default function Home () {
    return (
        <div className="wrapper absolute bg-slate-300 h-full w-full text-center">
        <div className="title m-6">
          <h1 className="font-bold text-2xl">Bem vindo ao Friendly Journey</h1>
          <h2 className="font-semibold text-xl mt-14">
            Um projeto{" "}
            <span className="text-orange-500">Cautious Invention</span>
          </h2>
        </div>
        <div className="description mt-28 flex flex-col gap-6">
          <p>
            Aqui você poderá{" "}
            <span className="font-semibold">criar e customizar</span> seu treino
            baseado em exercícios previamente cadastrados, ou criar seus
            próprios exercícios e acoplá-los ao seu treino.
          </p>
          <p>
            Inicie a sessão do treino e{" "}
            <span className="font-semibold">
              registre a quantidade de séries, repetições e cargas
            </span>{" "}
            efetuadas em cada exercício e acompanhe sua evolução através do
            tempo num gráfico.
          </p>
          <div className="start-btn mt-12">
          <button className="font-bold">Vamos começar!</button>
        </div>
        </div>
      </div>
    )
}