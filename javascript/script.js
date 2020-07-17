/*
    Nome: Henrique Servidoni de Oliveira
    RA: 2760481821017
    Disciplina: Eletiva I - Programação de Scripts
*/

document.getElementById('creditos').value = '\nNome: Henrique Servidoni de Oliveira\n'
document.getElementById('creditos').value += 'RA: 2760481821017\n'
document.getElementById('creditos').value += '_______________________________________________\n'
document.getElementById('creditos').value += '\nProjeto Lanchonete da Disciplina Programação de Scripts\n'
document.getElementById('creditos').value += '_______________________________________________\n'
document.getElementById('creditos').value += '\nFATEC Campinas - 2020'

document.getElementById('adicionais').style.visibility = "hidden"
document.getElementById('tiposBebidasBorda').style.visibility = "hidden"

var total = 10
var peds = []
var adc = ['catchup', 'mostarda', 'maionese', 'batatapalha', 'molho', 'pimenta', 'pure']
var areaatual = [10]


function novoPed(){  // gera um número aleatório e joga no campo código
    var n = geraCodigo()
    document.getElementById('codigo').value = n
    document.getElementById('cliente').disabled = false
    document.getElementById('tiposLanches').disabled = false
    document.getElementById('ADCsim').disabled = false
    document.getElementById('ADCnao').disabled = false
    document.getElementById('bebidaSIM').disabled = false
    document.getElementById('bebidaNAO').disabled = false
    document.getElementById('dataPedido').disabled = false
    document.getElementById('obs').disabled = false
    document.getElementById('botNovo').disabled = true
}



function geraCodigo(){ // gera um numero aleatorio entre 1 e 10000
    var n = Math.floor((Math.random() * 10000) + 1)
    return n
}



function adicionais(){ // abre e fecha a faixa de adicionais
    if(document.getElementById('ADCsim').checked){
        document.getElementById('adicionais').style.visibility = "visible"
    }
    else if(document.getElementById('ADCnao').checked){
        document.getElementById('adicionais').style.visibility = "hidden"
    }
}



function boolBebida(){ // abre e fecha caixa de bebidas
    if(document.getElementById('bebidaSIM').checked){
        document.getElementById('tiposBebidas').style.visibility = "visible"
        document.getElementById('tiposBebidasBorda').style.visibility = "visible"
        document.getElementById('geladaSIM').disabled = false
        document.getElementById('geladaNAO').disabled = false
    }
    else if(document.getElementById('bebidaNAO').checked){
        document.getElementById('tiposBebidas').style.visibility = "hidden"
        document.getElementById('tiposBebidasBorda').style.visibility = "hidden"
        document.getElementById('geladaSIM').disabled = true
        document.getElementById('geladaNAO').disabled = true
    }
}



function resetar(){ // reseta os campos
    document.getElementById('nomeReset').reset()
    document.getElementById('obsReset').reset()
    document.getElementById('dataReset').reset()
    document.getElementById('pedidoReset').reset()
    document.getElementById('ADCsim').checked = false
    document.getElementById('ADCnao').checked = false
    document.getElementById('bebidaSIM').checked = false
    document.getElementById('bebidaNAO').checked = false
    document.getElementById('geladaSIM').disabled = true
    document.getElementById('geladaNAO').disabled = true
    document.getElementById('tiposLanches').value = "vazio"
    document.getElementById('tiposBebidas').style.visibility = "hidden"
    document.getElementById('tiposBebidasBorda').style.visibility = "hidden"
    document.getElementById('adicionais').style.visibility = "hidden"
}



function salvarPed(){ // cria um objeto a partir dos dados concatenados e salva ele em um vetor de objetos
    if(window.confirm('\nTem certeza que deseja salvar o pedido ?')){
        if(document.getElementById('pedidoAtual').value == ''){
            window.alert('Feche o pedido antes de salvar!')
        }
        else{

            var pedido = {

                codigo: null,
                data: null,
                nome: null,
                lanche: null,
                adc: '',
                total: null,
                bebida: null,
                gelada: '',

                setCodigo: function(){
                    this.codigo = document.getElementById('codigo').value
                },

                setData: function(){
                    this.data = document.getElementById('dataPedido').value
                },

                setNome: function(){
                    this.nome = document.getElementById('cliente').value
                },

                setLanche: function(){

                    switch(document.getElementById('tiposLanches').value){
            
                        case 'cachorroquente':
                            this.lanche = 'Cachorro Quente'
                            break;
            
                        case 'pernil':
                            this.lanche = 'Lanche de Pernil'
                            break;
            
                        case 'xburguer':
                            this.lanche = 'X-Burguer'
                            break;
            
                        case 'xsalada':
                            this.lanche = 'X-Salada'
                            break;
            
                        case 'xegg':
                            this.lanche = 'X-Egg'
                            break;
            
                        case 'xbacon':
                            this.lanche = 'X-Bacon'
                            break;
            
                        case 'xtudo':
                            this.lanche = 'X-Tudo'
                            break;
            
                        case 'xressaca':
                            this.lanche = 'X-Ressaca'
                            break;
            
                    }

                },

                setAdc: function(){

                    for(var i=0; i<adc.length; i++){
                        if(document.getElementById(adc[i]).checked == true){
                            if(adc[i] == 'batatapalha'){
                                this.adc += 'batata palha / ' 
                            }
                            else{
                                this.adc += adc[i] + ' / ' 
                            }
                            
                        }
                    }

                },

                setTotal: function(total){
                    this.total = total
                },

                setBebida: function(){

                    if(document.getElementById('bebidaNAO').checked == true){
                        this.bebida = 'Sem Bebida'
                    }
                    else{
                        switch(document.getElementById('tiposBebidas').value){
                
                            case 'aguamineral':
                                this.bebida = 'Água Mineral'
                                break;
                
                            case 'aguagas':
                                this.bebida = 'Água com Gás'
                                break;
                
                            case 'cocacola':
                                this.bebida = 'Coca-Cola'
                                break;
                
                            case 'cocazero':
                                this.bebida = 'Coca-Cola Zero'
                                break;
                
                            case 'sucocaja':
                                this.bebida = 'Suco de Cajá'
                                break;
                
                            case 'sucomelancia':
                                this.bebida = 'Suco de Melancia'
                                break;
                
                            case 'sucolaranja':
                                this.bebida = 'Suco de Laranja'
                                break;

                        }
                    }

                },

                setGelada: function(){

                    if(document.getElementById('bebidaSIM').checked == true){

                        if(document.getElementById('geladaSIM').checked == true){
                            this.gelada = ', COM gelo'
                        }
                        else{
                            this.gelada = ', SEM gelo'
                        }

                    }
                    
                }
            
            }

            var p = Object.create(pedido)
            p.setCodigo()
            p.setData()
            p.setNome()
            p.setLanche()
            p.setAdc()
            p.setTotal(total)
            p.setBebida()
            p.setGelada()
            peds.push(p)

        }

    }
    
    document.getElementById('nomeReset').reset()
    document.getElementById('obsReset').reset()
    document.getElementById('dataReset').reset()
    document.getElementById('ADCsim').checked = false
    document.getElementById('ADCnao').checked = false
    document.getElementById('bebidaSIM').checked = false
    document.getElementById('bebidaNAO').checked = false
    document.getElementById('geladaSIM').disabled = true
    document.getElementById('geladaNAO').disabled = true
    document.getElementById('tiposLanches').value = "vazio"
    document.getElementById('tiposBebidas').style.visibility = "hidden"
    document.getElementById('tiposBebidasBorda').style.visibility = "hidden"
    document.getElementById('adicionais').style.visibility = "hidden"

}



function imprimirTodos(){ // imprime cada atributo de cada objeto

    var WinPrintAll = window.open('', '', 'left=0,top=0,width=1200,height=900,toolbar=0,scrollbars=0,status=0')

    WinPrintAll.document.write('<br>================= RELAÇÃO DE TODOS OS PEDIDOS =================<br><br><br>')

    for(var j=0; j<1; j++){
        WinPrintAll.document.write('Código do Pedido: ' + peds[j].codigo)
        WinPrintAll.document.write('<br>')
        WinPrintAll.document.write('Data do Pedido: ' + peds[j].data)
        WinPrintAll.document.write('<br>')

        for(var i=0; i < peds.length; i++){
    
            WinPrintAll.document.write('<br>')
            WinPrintAll.document.write('Nome: ' + peds[i].nome)
            WinPrintAll.document.write('<br>')
            WinPrintAll.document.write('Lanche: ' + peds[i].lanche)
            WinPrintAll.document.write('<br>')
            
            if(peds[i].adc == ''){
                WinPrintAll.document.write('Sem Adicionais')
            }
            else{
                WinPrintAll.document.write('Adicionais: ' + peds[i].adc)
            }
    
            WinPrintAll.document.write('<br>')
            WinPrintAll.document.write('Bebida: ' + peds[i].bebida + peds[i].gelada)
            WinPrintAll.document.write('<br>')
            WinPrintAll.document.write('Total: R$ ' + peds[i].total)
            WinPrintAll.document.write('<br><br>-------------<br>')
        }
    }

    WinPrintAll.document.close()
    WinPrintAll.print()
    WinPrintAll.close()

}



function fecharPed(){ // concatena os dados na área pedido

    if(window.confirm('\nTem certeza que deseja fechar o pedido ?')){
        if(document.getElementById('codigo').value == ''){
            window.alert('\nAbra um pedido antes de salvar !')
        }
        else{

            if(!document.getElementById('cliente').value
                || document.getElementById('tiposLanches').value == 'vazio'
                || !document.getElementById('dataPedido').value
                || (document.getElementById('ADCsim').checked == false && document.getElementById('ADCnao').checked == false)
                || (document.getElementById('bebidaSIM').checked == false && document.getElementById('bebidaNAO').checked == false))
                {
                window.alert('\nPor favor preencha todos os campos!')
            }
            else{

                total = 10

                for(var i=0; i < areaatual.length; i++){
                    areaatual[i] = ''
                }

                document.getElementById('pedidoAtual').value = '============ Seu Pedido ============'
                areaatual[0] = '============ Seu Pedido ============'

                document.getElementById('pedidoAtual').value += '\n\nCódigo: ' + document.getElementById('codigo').value
                areaatual[1] = '\n\nCódigo: ' + document.getElementById('codigo').value

                document.getElementById('pedidoAtual').value += '\n\nNome: ' + document.getElementById('cliente').value
                areaatual[2] = '\n\nNome: ' + document.getElementById('cliente').value

                document.getElementById('pedidoAtual').value += '\n\nLanche: '

                switch(document.getElementById('tiposLanches').value){
                    
                    case 'cachorroquente':
                        document.getElementById('pedidoAtual').value += 'Cachorro Quente'
                        areaatual[3] = '\n\nLanche: Cachorro Quente'
                        break;

                    case 'pernil':
                        document.getElementById('pedidoAtual').value += 'Lanche de Pernil'
                        areaatual[3] = '\n\nLanche: Lanche de Pernil'
                        break;

                    case 'xburguer':
                        document.getElementById('pedidoAtual').value += 'X-Burguer'
                        areaatual[3] = '\n\nLanche: X-Burguer'
                        break;

                    case 'xsalada':
                        document.getElementById('pedidoAtual').value += 'X-Salada'
                        areaatual[3] = '\n\nLanche: X-Salada'
                        break;

                    case 'xegg':
                        document.getElementById('pedidoAtual').value += 'X-Egg'
                        areaatual[3] = '\n\nLanche: X-Egg'
                        break;

                    case 'xbacon':
                        document.getElementById('pedidoAtual').value += 'X-Bacon'
                        areaatual[3] = '\n\nLanche: X-Bacon'
                        break;

                    case 'xtudo':
                        document.getElementById('pedidoAtual').value += 'X-Tudo'
                        areaatual[3] = '\n\nLanche: X-Tudo'
                        break;

                    case 'xressaca':
                        document.getElementById('pedidoAtual').value += 'X-Ressaca'
                        areaatual[3] = '\n\nLanche: X-Ressaca'
                        break;
                }

                
                if(document.getElementById('ADCnao').checked == true){
                    document.getElementById('pedidoAtual').value += '\n\nSem Adicionais'
                    areaatual[4] = '\n\nSem Adicionais'
                }
                else if(document.getElementById('ADCsim').checked == true){

                    document.getElementById('pedidoAtual').value += '\n\nAdicionais: '
                    areaatual[4] = '\n\nAdicionais: '

                    for(var i=0; i<adc.length; i++){
                        if(document.getElementById(adc[i]).checked == true){
                            total += 2.50
                            areaatual[4] += adc[i] + ' / '
                            document.getElementById('pedidoAtual').value += document.getElementById(adc[i]).value + ' / '
                        }
                    }
                }

                if(document.getElementById('bebidaNAO').checked == true){
                    document.getElementById('pedidoAtual').value += '\n\nSem Bebida'
                    areaatual[5] = '\n\nSem Bebida'
                }
                else if(document.getElementById('bebidaSIM').checked == true){

                    total += 4.00
                    document.getElementById('pedidoAtual').value += '\n\nBebida: '

                    switch(document.getElementById('tiposBebidas').value){

                        case 'aguamineral':
                            document.getElementById('pedidoAtual').value += 'Água Mineral '
                            areaatual[5] = '\n\nBebida: Água Mineral'
                            break;

                        case 'aguagas':
                            document.getElementById('pedidoAtual').value += 'Água com Gás'
                            areaatual[5] = '\n\nBebida: Água com Gás'
                            break;

                        case 'cocacola':
                            document.getElementById('pedidoAtual').value += 'Coca-Cola'
                            areaatual[5] = '\n\nBebida: Coca-Cola'
                            break;

                        case 'cocazero':
                            document.getElementById('pedidoAtual').value += 'Coca-Cola Zero'
                            areaatual[5] = '\n\nBebida: Coca-Cola Zero'
                            break;

                        case 'sucocaja':
                            document.getElementById('pedidoAtual').value += 'Suco de Cajá'
                            areaatual[5] = '\n\nBebida: Suco de Cajá'
                            break;

                        case 'sucomelancia':
                            document.getElementById('pedidoAtual').value += 'Suco de Melancia'
                            areaatual[5] = '\n\nBebida: Suco de Melancia'
                            break;

                        case 'sucolaranja':
                            document.getElementById('pedidoAtual').value += 'Suco de Laranja'
                            areaatual[5] = '\n\nBebida: Suco de Laranja'
                            break;

                    }

                    if(document.getElementById('geladaSIM').checked == true){
                        document.getElementById('pedidoAtual').value += '\nGelada: SIM'
                        areaatual[6] = '\nGelada: SIM'
                        total += 1.00
                    }
                    else if(document.getElementById('geladaNAO').checked == true){
                        document.getElementById('pedidoAtual').value += '\nGelada: NÃO'
                        areaatual[6] = '\nGelada: NÃO'
                    }

                }
                
                document.getElementById('pedidoAtual').value += '\n\nTotal: R$  ' + total
                document.getElementById('pedidoAtual').value += '\n\nData: ' + document.getElementById('dataPedido').value

                if(!document.getElementById('obs').value){
                    document.getElementById('pedidoAtual').value += '\n\nObservações: NENHUMA'
                }
                else{
                    document.getElementById('pedidoAtual').value += '\n\nObservações: ' + document.getElementById('obs').value
                }

                if(areaatual[5] == '\n\nSem Bebida'){
                    areaatual[6] = '\n\nTotal: R$  ' + total
                    areaatual[7] = '\n\nData: ' + document.getElementById('dataPedido').value
                    areaatual[8] = '\n\nObservações: ' + document.getElementById('obs').value
                }
                else if(areaatual[5] != '\n\nSem Bebida'){
                    areaatual[7] = '\n\nTotal: R$  ' + total
                    areaatual[8] = '\n\nData: ' + document.getElementById('dataPedido').value
                    areaatual[9] = '\n\nObservações: ' + document.getElementById('obs').value
                }

            }
        }
    }
    
}



function sair(){ // fecha a página
    if(window.confirm('\nTem certeza que deseja sair ?')){
        window.close()
    }
}



function imprimir(){ // imprime o pedido atual na área concatenada

    var WinPrint = window.open('', '', 'left=0,top=0,width=1200,height=900,toolbar=0,scrollbars=0,status=0')

    for(var i=0; i < areaatual.length; i++){
        WinPrint.document.write(areaatual[i] + '<br>')
    }

    WinPrint.document.close()
    WinPrint.print()
    WinPrint.close()

}