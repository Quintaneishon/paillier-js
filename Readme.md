# Ejemplo de ejercicio con Paillier JS

## Votaciones

Supongamos que hay 3,000 votantes y 4 candidatos. 3,000 caben en 12 bits.
Entonces los mensajes quedarian de la sigueinte manera:

| Candidato | Candidato A   | Candidato B   | Candidato C   | Candidato D   |
| :-------- | :-----------: | :-----------: | :-----------: | :-----------: |
| <b>Binario</b>   | 000000000001  | 000000000001  | 000000000001  | 000000000001  |
| <b>Decimal</b>   | 68,719,476,736| 16,777,216    | 4,096         | 1             |

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
| Votante 1   | Candidato A  | 68719476736   |
| Votante 2   | Candidato B  | 16777216   |
| Votante 3   | Candidato C  | 4096   |
| Votante 4   | Candidato D  | 1   |

tenemos los siguientes mensajes:

m1 = 68719476736

m2 = 16777216

m3 = 4096

m4 = 1

la suma es <b>68736258049</b>

ciframos todos los mensajes y los multiplicamos, el resultado es: <b>1480417072 ... 35424046592</b>

y al desicfrar esta multiplicacion obtenemos <b>68736258049</b>

De esta forma podemos comprobar la característica homomorfa del algoritmo de Paillier.

## Ejecución

Para la ejecución del ejemplo, se deberá ejecutar el siguiente comando.

```console	
> node index.js
```
