import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
providedIn: 'root'
})
export class DatabaseService {
private dbInstance: SQLiteObject | null = null;

constructor(private platform: Platform, private sqlite: SQLite) {
this.platform.ready().then(() => {
    this.createDatabase();
});
}

async createDatabase() {
try {
    this.dbInstance = await this.sqlite.create({
    name: 'usuarios.db',
    location: 'default'
    });
    await this.createTables();
} catch (e) {
    console.error('Error creando la base de datos', e);
}
}

async createTables() {
if (!this.dbInstance) return;
const sql = `CREATE TABLE IF NOT EXISTS usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    apellido TEXT,
    fecha_nacimiento TEXT,
    correo TEXT UNIQUE,
    contrasena TEXT
)`;
await this.dbInstance.executeSql(sql, []);
}

async addUsuario(usuario: {nombre: string, apellido: string, fecha_nacimiento: string, correo: string, contrasena: string}) {
if (!this.dbInstance) return;
const sql = `INSERT INTO usuario (nombre, apellido, fecha_nacimiento, correo, contrasena) VALUES (?, ?, ?, ?, ?)`;
await this.dbInstance.executeSql(sql, [usuario.nombre, usuario.apellido, usuario.fecha_nacimiento, usuario.correo, usuario.contrasena]);
}

async getUsuarios() {
if (!this.dbInstance) return [];
const sql = `SELECT * FROM usuario`;
const res = await this.dbInstance.executeSql(sql, []);
const usuarios = [];
for (let i = 0; i < res.rows.length; i++) {
    usuarios.push(res.rows.item(i));
}
return usuarios;
}

// Puedes agregar más métodos para actualizar y eliminar usuarios
}
