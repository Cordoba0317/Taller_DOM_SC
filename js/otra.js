function calcularPresupuesto(){
    
    let ninv= Number(document.getElementById("numero-inv").value)
    let costf= Number(document.getElementById("cost-comida").value)
    let costd= Number(document.getElementById("cost-bebida").value)
    let deco= Number(document.getElementById("cost-decor").value)
    let msic= Number(document.getElementById("cost-musica").value)
    let prop= Number(document.getElementById("propina-porc").value)

    let totalf= costf*ninv;
    document.getElementById("comida-total-s").innerText =totalf.toLocaleString('es-CO');

    let totald =ninv*costd;
    document.getElementById("bebida-total-s").innerText =totalf.toLocaleString('es-CO');
    
    let totaldeco =ninv*deco
    document.getElementById("decoracion").innerText =totaldeco.toLocaleString('es-CO');
    
    let totalm =ninv*msic
    document.getElementById("musica").innerText =totalm.toLocaleString('es-CO');
   
    let subttl= totalf+totald+totaldeco+totalm;
    document.getElementById("subtotal").innerText =subttl.toLocaleString('es-CO');

    let tprop =subttl*(prop/100);
    document.getElementById("propina").innerText =tprop.toLocaleString('es-CO');

    let generalt =subttl+tprop;
    document.getElementById("total-general").innerText =generalt.toLocaleString('es-CO');

    let txinv = generalt/ninv
    document.getElementById("costo-inv").innerText =txinv.toLocaleString('es-CO')

} costo-inv