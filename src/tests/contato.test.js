import { describe, it, before } from 'node:test';
import assert from 'node:assert';
import request from 'supertest';
import app from '../../server.js'
import { response } from 'express';
import FormData from 'form-data';


//Adicionar testes para cadastro e e GET de usuário


const newContato = {
    email: "Canetaazul@gmail.com",
    tipo: "Denuncia",
    message: "Teste"
};

const form = new FormData();
// Adicionando campos de texto ao FormData
form.append('email', 'Canetaazul@gmail.com');
form.append('tipo', 'denuncia');
form.append('message', 'Teste')


describe('Matrículajá', () => {
    /*it("should log a user", async () => {
        const response = await request(app).post('/users/login').send(loggedUser);
        assert.strictEqual(response.status, 200);
        assert.ok(response.body.token);
    });*/
    describe("Contatos", () => {
    it("Should send a contact email", async () => {
        const response = await request(app).post('/contato').send(form);
        assert.strictEqual(response.status, 200);
        createdSchool = response.body;
        console.log(createdSchool)
    })
  
  ;})
});