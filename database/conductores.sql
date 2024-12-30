drop database móvil_Conductor;
create database móvil_Conductor;
use móvil_Conductor;

create table Conductor(
ID_Conductor int primary key not null,
nombre varchar(60) not null,
apellido varchar(60) not null,
telefono varchar(11) not null,
fechaExp date not null,
fechaVen date not null
);

create table Administrador(
ID int Primary key not null,
nombre varchar(50) not null,
apellido varchar(50) not null,
contraseña varchar(60) not null
);

create table Móvil(
ID_Movil int primary key not null,
Placa varchar(6) not null,
T_vinculación varchar(20) not null,
RTM int not null,
Exp_RTM date not null,
Ven_RTM date not null,
RCC int not null,
Exp_RCC date not null,
Ven_RCC date not null,
RCE int not null,
Exp_RCE date not null,
Ven_RCE date not null,
SOAT int not null,
Exp_SOAT date not null,
Ven_SOAT date not null,
Exp_Operacion date not null,
Ven_Operacion date not null,
Exp_Transito date not null,
Ven_Transito date not null
);


create table Preoperacional(
ID int auto_increment primary key not null,
ID_Movil int not null,
fecha_act date not null,
Pito varchar(60)not null,
Luz_Reversa varchar(60)not null,
Luces varchar(60)not null,
Direccionales varchar(60)not null,
Nivel_FLuido varchar(60)not null,
Fuga_Fluido varchar(60)not null,
Novedad_piezas varchar(60)not null,
Novedad_encendido varchar(60)not null,
Kilometraje varchar(20)not null,
Sueño time not null,
Kit varchar(60)not null,
carroceria varchar(60)not null,
Botiquin varchar(60)not null,
Interior varchar(60)not null,
Llantas varchar(60)not null,
Luz_Parqueo varchar(60)not null,
Horas_manejando varchar(60)not null,
Vision varchar(60)not null,
pausas varchar(2) not null,
sintomas varchar(60) not null,
Inicio datetime not null,
ID_Conductor int not null,
imagen blob null,
foreign key (ID_Conductor) references Conductor (ID_Conductor),
foreign key (ID_Movil) references Móvil (ID_Movil)
);

INSERT INTO Conductor (ID_Conductor, nombre, apellido, telefono, fechaExp, fechaVen) 
VALUES 
(1011011010, 'Juan', 'Pérez',3001234567, '2024-01-01', '2025-01-01'),
(2022022020, 'Ana', 'Gómez',3012345678,  '2024-05-15', '2025-05-15'),
(1033033030, 'Carlos', 'Sánchez',3023456789, '2024-08-20', '2025-08-20');
select * from Conductor;

INSERT INTO Administrador (ID, nombre, apellido, contraseña) 
VALUES 
(1, 'Luis', 'Martínez', 'luis123'),
(2, 'Carla', 'Rodríguez', 'carla456'),
(3, 'José', 'García', 'jose789');
select * from Administrador;

INSERT INTO Móvil (ID_Movil, Placa, T_vinculación, RTM, Exp_RTM, Ven_RTM, RCC, Exp_RCC, Ven_RCC, RCE, Exp_RCE, Ven_RCE, SOAT, Exp_SOAT, Ven_SOAT, Exp_Operacion, Ven_Operacion, Exp_Transito, Ven_Transito) 
VALUES 
(0126, 'ABC123', 'Vinculado', 2345678, '2021-06-01', '2024-06-01', 123456, '2021-06-01', '2024-06-01', 654321, '2021-06-01', '2024-06-01', 789012, '2021-06-01', '2024-06-01', '2021-06-01', '2024-06-04', '2021-06-03', '2024-06-02'),
(0030, 'XYZ456', 'No vinculado', 3456789, '2022-07-15', '2025-07-15', 234567, '2022-07-15', '2025-07-15', 765432, '2022-07-15', '2025-07-15', 890123, '2022-07-15', '2025-07-15', '2021-06-02', '2024-06-01', '2021-06-03', '2024-06-04'),
(0032, 'LMN789', 'Vinculado', 4567890, '2020-10-10', '2023-10-10', 345678, '2020-10-10', '2023-10-10', 876543, '2020-10-10', '2023-10-10', 901234, '2020-10-10', '2023-10-10', '2021-06-03', '2024-06-02', '2021-06-01', '2024-06-04');
SELECT * FROM Móvil;


INSERT INTO Preoperacional (
    ID_Movil, fecha_act, Pito, Luz_Reversa, Luces, Direccionales, Nivel_FLuido, 
    Fuga_Fluido, Novedad_piezas, Novedad_encendido, Kilometraje, Sueño, Kit, 
    carroceria, Botiquin, Interior, Llantas, Luz_Parqueo, Horas_manejando, Vision, 
    pausas, sintomas, Inicio, ID_Conductor
) 
VALUES (
    30, '2024-12-27', 'Funcional', 'Funcional', 'Funcional', 'Funcional', 'Normal', 
    'Sin fugas', 'Sin novedades', 'Correcto', '12000 km', '07:30:00', 'Completo', 
    'En buen estado', 'Completo', 'Limpio', 'Buen estado', 'Funcional', '6 horas', 
    'Buena', 'Si', 'Ninguno', '2024-12-27 08:00:00', 1011011010),
    (30, '2024-12-27', 'No funcional', 'Funcional', 'Funcional', 'No funcional', 'Bajo', 
    'Con fugas', 'Piezas desgastadas', 'Dificultad', '8000 km', '06:30:00', 'Incompleto', 
    'Desgastada', 'Incompleto', 'Sucio', 'Desgastadas', 'No funcional', '8 horas', 
    'Regular', 'No', 'Fatiga', '2024-12-27 09:00:00', 1033033030
);
select * from Preoperacional;