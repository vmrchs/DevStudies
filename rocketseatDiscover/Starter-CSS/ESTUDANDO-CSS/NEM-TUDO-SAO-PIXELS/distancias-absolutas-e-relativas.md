# Distâncias absolutas <lengh>

São ficas e não alteram seu valor.

UNIDADE     NOME                EQUIVALÊNCIA   
cm          Centímetros         1cm = 96px/2.54
in          Inches(polegadas)   1in = 2.54cm = 96px
px          Pixels              1px = 1/96th of 1in

* o mais comum e mais utilizado é o **px**
* não recomendado usar cm

# Distâncias relativas

São relativas a algum outro valor, pode ser o elemento pai, ou root, ou o tamanho da tela.

* Benefício: Maior adaptação aos diferentes tipos de tela

UNIDADE     RELATIVO A  
em          Tamanho da font do pai (1em = fonte definida em px no elemento pai)
rem         Tamanho da fonte do elemento raiz (root/html)
vw          1% da viewport width
vh          1% da viewport height
