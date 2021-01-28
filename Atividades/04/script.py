
class objeto:
    def funcao1(self,nome):
        parametro  = 'ola'
        def funcao2(parametro):
            nome += 1
            print(f'{parametro} {nome}')

        funcao2(parametro)

a  = objeto()

a.funcao1('nome')
