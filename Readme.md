# Ejemplo de ejercicio con Paillier JS

## Generación de llaves

### generateRandomKeys( largoDeBits )

#### Llave pública

<b>n</b> = Se eligen dos numeros primos, aleatoriamente e independientes uno de otro tal que gcd( p·q, (p-1)(q-1) )=1 y n=p·q tienen el largo de bits especificados como parametro

<b>_n2</b> = n ^ 2

<b>g</b> = n + 1

#### LLave privada

<b>λ</b> = lcm(p-1, q-1) con lcm(a,b) = a·b/gcd(a, b)

<b>μ</b> = ( g^λ mod n^2  ) ^ {-1} mod n

## Cifrar

<b>m</b> = número a cifrar

<b>r</b> = número aleatorio menor que n tal que gcd( r, n ) sea diferente de 1

<b>c</b> =  ( g * m ) * ( r * n ) mod _n2

## Descifrar

<b>c</b> = mensaje cifrado

<b>m</b> = ( ( ( c * λ mod _n2 ) - 1 ) / n ) * μ mod n

## Ejemplo

Supongamos que hay 13 votantes y 4 candidatos. El número 13 cabe en 4 bits.
Entonces los mensajes quedarian de la sigueinte manera:

| Candidato | Valor Binario   | Valor Decimal |
| :--------: | :-----------: | :-----------: |
| Candidato A   | 0001 0000 0000 0000  | 4096   |
| Candidato B   | 0000 0001 0000 0000  | 256   |
| Candidato C   | 0000 0000 0001 0000  | 16   |
| Candidato D   | 0000 0000 0000 0001  | 1   |

Ahora supongamos que 5 votantes quieren votar de la siguiente manera

| Votante | Candidato   | Mensaje |
| :--------: | :-----------: | :-----------: |
| Votante 1   | Candidato A  | 4096   |
| Votante 2   | Candidato B  | 256   |
| Votante 3   | Candidato C  | 16   |
| Votante 4   | Candidato D  | 1   |
| Votante 5   | Candidato C  | 16   |

### Generamos la llave privada y publica

#### LLave publica

<b>p</b> = 131

<b>q</b> = 109

<b>n</b> = 14279 

<b>_n2</b> = 203889841

<b>g</b> = 14280


### LLave privada

<b>λ</b> = 14040

<b>μ</b> = 2808

### Ciframos los mensajes

m1 = 4096,
c1 = 190381436

m2 = 256,
c2 = 154411742

m3 = 16,
c3 = 45011819

m4 = 1,
c4 = 35105138

m5 = 16,
c5 = 166530137

### Suma de los mensajes sin cifrar

<b>4,385</b>

### Multiplicación de los mensajes cifrados

<b>7735617879876967158934842527579319701168</b>

### Desciframos la multiplicación

<b>4,385</b>

___De esta forma podemos comprobar la característica homomorfa del algoritmo de Paillier.___

### Convertimos el valor a binario para obtener los resultados

<b>1 0001 0010 0001</b>

| Candidato | Voto Binario | Voto decimal  | 
| :--------: | :-----------: | :-----------: |
| Candidato A | 1  | 1  |
| Candidato B |  0001 | 1  |
| Candidato C |  0010 | 2  |
| Candidato D |  0001 | 1  |


## Ejecución

Para la ejecución del ejemplo, se deberá ejecutar el siguiente comando.

```console	
> npm install

> node index.js
```
