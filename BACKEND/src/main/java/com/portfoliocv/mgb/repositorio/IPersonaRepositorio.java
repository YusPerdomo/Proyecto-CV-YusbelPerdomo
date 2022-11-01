/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfoliocv.mgb.repositorio;

import com.portfoliocv.mgb.entidad.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author jhern
 */
@Repository
public interface IPersonaRepositorio extends JpaRepository <Persona,Long> {
    
    
    
}
