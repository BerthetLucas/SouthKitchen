import chef from '../assets/img/chef.jpg'



function History () {
    return (
<div className="relative">
<img src={chef} alt="" className="sm:w-max md:w-4/5 lg:w-3/5 2xl:w-max" ></img>
<p className="text-center bg-black text-white font-bold  opacity-60 absolute bottom-1  md:bottom-10 md:max-w-[80%] lg:max-w-[60%] 2xl:max-w-[100%]">"L'avenir de la cuisine c'est de travailler avec des produits proches de chez soit et de saisons, s'inspirer de la nature"</p>


</div>
    )
}

export default History 