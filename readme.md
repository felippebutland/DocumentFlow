**3. ANÁLISE E MODELAGEM**

A primeira versão de arquitetura do projeto, será desenvolvida neste capítulo, além de

requisitos funcionais e não funcionais. Utilizarei o site "draw.io" para realizar os desenhos,

fluxos e primeira seção de arquitetura, além de exemplificar as regras da arquitetura. Nas

próximas versões do projeto, será utilizada tecnologia C4 model para exemplificar e desenhar

os diagramas.

**3.1 Modelo Arquitetural**

Para o desenvolvimento do trabalho, utilizando modelos arquiteturais como micro

serviços e mensageria, será desenvolvido 5 micro serviços, todos escritos em NodeJs/NestJs e

Typescript. Para o API Gateway será desenvolvido uma aplicação em spring boot, utilizando

o Spring Gateway. Como citado anteriormente, o Gateway é o coração de uma aplicação

baseada em micro serviços, para realizar o roteamento entre eles.

Para banco de dados, será utilizado o MongoDB para salvar informações como logger

e usuários, já no Google Firestore, será salvo os documentos de cada usuário. Cada usuário

terá uma coleção de documentos. Foram escolhidas essas tecnologias para salvar os dados,

pois são utilizadas em larga escala em aplicações de micro serviços.

**FIGURA 10 -** Arquitetura da aplicação

**Fonte**: Autor(2023)



<a name="br36"></a> 

29

**3.3 Modelagem de dados**

Tendo os requisitos funcionais e não funcionais, fica mais fácil definir quais dados e

quais valores serão salvos no banco de dados. Conforme supracitado no item 3.1, para o

desenvolvimento da aplicação será necessário utilizar duas tabelas, uma sendo alocada no

banco local, onde será salvo informações de notificação, e-mail, número de telefone e nome

do usuário no MongoDB, já no Google Firestore, terá apenas as informações do identificador

do usuário e todos os documentos enviados pelo mesmo. Também haverá uma tabela de

logger, para garantir que os dados sejam confiáveis, além de garantir qual era o valor do

registro antigo e do registro novo.



<a name="br38"></a> 

31

**FIGURA 11 -** Modelagem dos dados

**Fonte:** Autor(2023)

**3.4 Perspectivas do produto**

**3.4.1 Modos de operação**

Para o protótipo, inicialmente será desenvolvido apenas uma API backend, com um

API gateway, conforme protótipo da Figura 10, além de ser desenvolvido toda a arquitetura

do protótipo em C4 utilizando ferramentas como C4 Builder. Para trabalhos futuros, poderá

ser desenvolvido uma aplicação frontend e um aplicativo móvel para realizar o envio de

documentos.

O trabalho será desenvolvido localmente, e também como futuras implementações

será criado uma aplicação em nuvem. Para envio dos documentos, será enviado para um

servidor em cloud, como o Google Cloud Firestore. O Firestore foi escolhido pela facilidade

de salvar os documentos em um local criptografado.
