/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dao;

import modelo.Autor;

/**
 *
 * @author alunolab07
 */
public interface AutorDAO {
    public boolean salvar(Autor autor);
    public Autor consultar(String nome);
    
}
