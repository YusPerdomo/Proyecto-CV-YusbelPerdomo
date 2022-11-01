/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfoliocv.mgb.servicio;

import com.portfoliocv.mgb.entidad.Persona;
import com.portfoliocv.mgb.interfaces.IPersonaServicio;
import com.portfoliocv.mgb.repositorio.IPersonaRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author jhern
 */
@Service
public class ImpPersonaService implements IPersonaServicio {
@Autowired IPersonaRepositorio ipersonaRepositorio;

    @Override
    public List<Persona> getPersona() {
        List<Persona> persona= ipersonaRepositorio.findAll();
        return persona;
    }

    @Override
    public void savePersona(Persona persona) {
        ipersonaRepositorio.save(persona);        
    }

    @Override
    public void deletePersona(Long id) {
         ipersonaRepositorio.deleteById(id);
    }

    @Override
    public Persona primeraPersona(Long id) {
        
        Persona persona=ipersonaRepositorio.findById(id).orElse(null);
        
        return persona;

    }
    
}
