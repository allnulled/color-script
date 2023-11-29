
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>🌐 ColorScript 🌐</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/codemirror/codemirror.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/theme/theme.css\" />\n    <script src=\"lib/codemirror/codemirror.js\"></script>\n    <script src=\"lib/color-script/color-script.js\"></script>\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/calo/calo.js\"></script>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <h5>🌐 ColorScript 🌐</h5>"
 + "    <div>"
 + "      <div>"
 + "        <textarea ref=\"consola_de_entrada\"></textarea>"
 + "      </div>"
 + "      <div>"
 + "        <button style=\"width:100%;\" v-on:click=\"compilar_colores\">Compile</button>"
 + "      </div>"
 + "      <div class=\"caja_de_error\" v-if=\"error\" v-on:click=\"limpiar_error\">"
 + "        <div>{{ error.name }}: {{ error.message }}</div>"
 + "        <div v-if=\"error.location\">"
 + "          <div>Position: {{ error.location }}</div>"
 + "        </div>"
 + "        <div v-if=\"error.expected\">"
 + "          <div>Expected: {{ error.expected }}</div>"
 + "        </div>"
 + "      </div>"
 + "      <div>"
 + "        <table>"
 + "          <tr class=\"caja_de_color\" v-for=\"color, color_index in colores\" v-bind:key=\"'color-' + color_index\">"
 + "            <td class=\"indice_de_color\">{{ color_index }}</td>"
 + "            <td class=\"cuadrado_de_color\" :style=\"'background-color:' + color.toRGB()\"></td>"
 + "            <td class=\"numero_de_color\">{{ color.toHexadecimal() }}</td>"
 + "            <td class=\"numero_de_color\">{{ color.toRGB() }}</td>"
 + "          </tr>"
 + "        </table>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { colores:[  ],
error:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ limpiar_error( error ) {try {
this.error = undefined;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
gestionar_error( error ) {try {
console.log(error);
this.error = error;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
compilar_colores() {try {
const entrada_original = this.cm_entrada.getValue(  );
const entrada_aplantillada = this.root.$window.ejs.render( entrada_original );
const ast = this.root.$window.ColorScript.parser.parse( entrada_aplantillada );
this.colores = ast;
this.$forceUpdate( true );
} catch(error) {
this.gestionar_error( error );}
}
},
watch:{ 
},
computed:{ 
},
beforeCreate() {
},
created() {
},
beforeMount() {
},
mounted() {try {
this.cm_entrada = CodeMirror.fromTextArea( this.$refs.consola_de_entrada,
{ lineNumbers:true
} );
} catch(error) {
console.log(error);
throw error;
}

},
beforeUpdate() {
},
updated() {
},
beforeUnmount() {
},
unmounted() {
},
activated() {
},
deactivated() {
}
};},
  null);
window.App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <router-view :root=\"this\"></router-view>"
 + "  </div>",
  function(component) {return { data() {try {
return { errores:[  ]
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ gestionar_error( error ) {try {
console.log(error);
this.errores.push(error)
} catch(error) {
console.log(error);
throw error;
}

}
},
watch:{ 
},
beforeMount() {try {
this.$window = window;
} catch(error) {
console.log(error);
throw error;
}

},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"PaginaDeInicio",
component:PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");