# Ejemplo de ejercicio con Paillier JS

## Votaciones

Supongamos que hay 13 votantes y 4 candidatos. 13 candidatos caben en 4 bits.
Entonces los mensajes quedarian de la sigueinte manera:

| Candidato | Candidato A   | Candidato B   | Candidato C   | Candidato D   |
| :-------- | :-----------: | :-----------: | :-----------: | :-----------: |
| <b>Binario</b>   | 0001  | 0001  | 0001  | 0001  |
| <b>Decimal</b>   | 4,096 | 256   | 16    | 1     |

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

Supongamos que 4 votantes quieren votar cada uno por 4 candidatos diferentes:

| Votante | Candidato   | Mensaje |
| :--------: | :-----------: | :-----------: |
| Votante 1   | Candidato A  | 4096   |
| Votante 2   | Candidato B  | 256   |
| Votante 3   | Candidato C  | 16   |
| Votante 4   | Candidato D  | 1   |

### Generamos la llave privada y publica

#### LLave publica

<b>p</b> = 83

<b>q</b> = 53

<b>n</b> = 4399 

<b>_n2</b> = 19351201

<b>g</b> = 12841802


### LLave privada

<b>λ</b> = 2132

<b>μ</b> = 333

### Ciframos los mensajes

m1 = 4096
c1 = 18135089

m2 = 256
c2 = 12536276

m3 = 16
c3 = 2772813

m4 = 1
c4 = 547209

### Suma de los mensajes sin cifrar

<b>4,369</b>

### Multiplicación de los mensajes cifrados

<b>344954686419270454171105188</b>

### Desciframos la multiplicación

<b>4,369</b>

___De esta forma podemos comprobar la característica homomorfa del algoritmo de Paillier.___

## Ejecución

Para la ejecución del ejemplo, se deberá ejecutar el siguiente comando.

```console	
> npm install

> node index.js
```
