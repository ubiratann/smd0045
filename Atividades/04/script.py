def fabricaDeUsuario():
    id = 0
    def criarUsuario(nome):
        nonlocal id
        id += 1
        return {
            'id': id,
            'nome': nome
        }
    return criarUsuario

fabrica = fabricaDeUsuario()

print(fabrica("Bruno"))
print(fabrica("José"))
