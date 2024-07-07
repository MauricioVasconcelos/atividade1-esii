# Função que retorna o valor da soma entre os dois parâmetros
def sum(v1, v2):
    return v1 + v2

# Função que retorna o valor da subtração entre os dois parâmetros
def sub(v1, v2):
    return v1 - v2

# Função que retorna o valor da divisão entre os dois parâmetros
def div(v1, v2):
    if v2 == 0:
        return "Erro: divisão por zero"
    return v1 / v2

# Função que retorna o valor da multiplicação entre os dois parâmetros
def mult(v1, v2):
    return v1 * v2

# Função que retorna o valor da raiz quadrada do valor recebido por parâmetro
def square(v1):
    return v1 ** 0.5

# Testando as funções
v1 = 10
v2 = 5

print(f"sum({v1}, {v2}) = {sum(v1, v2)}")  # Deve imprimir 15
print(f"sub({v1}, {v2}) = {sub(v1, v2)}")  # Deve imprimir 5
print(f"div({v1}, {v2}) = {div(v1, v2)}")  # Deve imprimir 2.0
print(f"mult({v1}, {v2}) = {mult(v1, v2)}")  # Deve imprimir 50
print(f"square({v1}) = {square(v1)}")  # Deve imprimir a raiz quadrada de 10
print(f"square({v2}) = {square(v2)}")  # Deve imprimir a raiz quadrada de 5

