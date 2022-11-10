# PlanPrecios

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

# Folding
En el  directorio llamado planes-cards, se guardan el módulo y los componentes  encargados de mostrar los planes de negocio, de esta manera queda perfectamente ordenado si en un futuro crece la aplicación. 

En componentes se agrupan aquellos elementos que son reusables. Aquí tenemos el componente Card y el cuadro de diálogo que se despliega al pulsar los botones de las tarjetas. El decorador @Input() nos manda información desde el padre, de esta manera la misma tarjeta nos sirve para mostrar tres planes de negocio distintos. 

# Card reusability
Para mandar información desde el padre al componente Card he creado un objeto y una interfaz para este. La lista de los servicios ofrecidos es la misma en las tres tarjetas así que en el componente card he creado una propiedad que contiene un array de strings con estos servicios, este array es el que muestro con ngFor, desde el padre solo envío la cantidad de servicios que están activos en cada plan. De esta manera no tengo que repetir tres veces la lista de servicios, en su lugar solo mando un número.

Para las tarjetas hay dos estilos uno para la principal y otro para el resto. Utilizo el atributo [ class ] con un operador ternario en la vista de card, así que dependiendo del tipo de plan se añade una u otra clase.


# styles width SASS
Gracias a los mixins de SASS he podido crear fácilmente diferentes versiones de un mismo botón. He implementado un método en el componente card que llama al botón que corresponde a cada tarjeta.

Cada color está recogido en una variable, de esta manera se puede cambiar toda la paleta de colores con solo poner otros valores en estas variables.


# angula material
Se ha utilizado angular material para la caja de diálogo y para el formulario donde se han implementado validaciones utilizando formularios reactivos.



# Ana Sanz

