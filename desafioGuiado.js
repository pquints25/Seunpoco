/* Crear la estructura de datos mediante arreglos y objetos. Debe crear 1 arreglo por cada
listado (Radiología, Traumatología y Dental) y 1 objeto por cada fila de información
que contengan los listados, considerando las propiedades establecidas en la
descripción */
let radiologia = [
    ['hora:11.00', 'paciente: FranciscaRojas',  'rut:9878782-1', 'prevision: Fonasa', 'especialista: IgnacioSchulz'],
    ['hora:11.30', 'paciente: PamelaEstrada', 'rut:1534524-1', 'prevision: Isapre', 'especialista: FedericoSubecaseaux'],
    ['hora:15.00', 'paciente: ArmandoLuna', 'rut:16445345-9', 'prevision: Isapre', 'especialista: FernandoWurthz'],
    ['hora:15.30', 'paciente: ManuelGodoy', 'rut:16445345-9', 'prevision: Isapre', 'especialista: FernandoWurthz'],
    ['hora:16.00', 'paciente: RamonUlloa', 'rut:16445345-9', 'prevision: Isapre', 'especialista: FernandoWurthz' ],
]
let traumatologia = [
['hora:8.00',  'paciente: PaulaSanchez',  'rut:15554774-5', 'prevision:Fonasa', 'especialista:MariaPazAltuzarra'],
    ['hora:10.00', 'paciente: AngelicaNavas', 'rut:15444147-9', 'prevision: Isapre', 'especialista:RaulAraya'],
    ['hora:10.30', 'paciente: AnaKlapp',      'rut:17879423-9', 'prevision: Isapre', 'especialista:MariaArriagada'],
    ['hora:11.00', 'paciente: FelipeMardones', 'rut:1547423-6', 'prevision: Isapre', 'especialista:AlejandroBadilla'],
    ['hora:11.30', 'paciente: DiegoMarre',     'rut:16554741-K', 'prevision: Fonasa', 'especialista:CeciliaBudnik'],
    ['hora:12.00', 'paciente: CeciliaMendez',  'rut:9747535-8', 'prevision: Isapre', 'especialista:ArturoCavagnaro'],
    ['hora:12.30', 'paciente: MarcialSuazo',   'rut:11254785-5', 'prevision: Isapre', 'especialista:AndresKanacri'],
]
let dental = [
    ['8.30', 'paciente:MarcelaRetamal', 'rut:11123425-6', 'prevision:Isapre', 'especialista: Isapre'],
    ['11.00',  'paciente:AngelMuñoz', 'rut:9878789-2', 'prevision:Isapre', 'especialista: Isapre'],
    ['11.30',  'paciente:MarioKast', 'rut:7998789-5', 'prevision:Fonasa', 'especialista: Fonasa'],
    ['13.00',  'paciente:KarinFernandez', 'rut:18887662-K', 'prevision:Fonasa', 'especialista: Fonasa'],
    ['13.30',  'paciente:HugoSanchez', 'rut:17665461-4', 'prevision:Fonasa', 'especialista: Fonasa'],
    ['14.00',  'paciente:AnaSepulveda', 'rut:14441281-0', 'prevision:Isapre', 'especialista: Isapre'],
]

/* Mostrar por pantalla la primera y última atención de cada listado, desplegando el
nombre del paciente junto con la previsión, separados por un guión (utilizar índices de
arreglos para esto)  */

function primeraUltimaAtencion (listado, nombres){
let primer = listado[0];
let ultimo = listado[listado.length -1];
}

function mostrarResultados(){
    let resultadosHTML = '';
};

primeraUltimaAtencion(radiologia, 'Radiologia');
primeraUltimaAtencion(traumatologia, 'Traumatologia');
primeraUltimaAtencion(dental, 'Dental');
