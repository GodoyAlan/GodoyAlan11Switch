let pedido = prompt("¿Que elejis del menu? (carne, pescado, verdura)");

switch (pedido) {
  case "carne":
    console.log("Elegiste la carne. Le ofrecemos como bebida vino tinto.");
    break;
  case "pescado":
    console.log("Elegiste el pescado. Le ofrecemos como bebida vino blanco.");
    break;
  case "verdura":
    console.log("Elegiste las verduras. Le ofrecemos como bebida agua.");
    break;
  default:
    console.log("Por favor elija carne, pescado o verdura.");
    break;
}