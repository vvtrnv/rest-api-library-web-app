package ru.nstu.rgr.service;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import ru.nstu.rgr.model.Rubric;
import ru.nstu.rgr.repository.ReadersRepository;
import ru.nstu.rgr.repository.RubricsRepository;

@Service
@RequiredArgsConstructor
public class RubricsService extends BasePersistentService<Rubric>{

    @Getter(AccessLevel.PROTECTED)
    private final RubricsRepository repo;

    public Rubric edit(Long id, Rubric item){
        if (id == null){
            return null;
        }
        Rubric itemsFromDb = repo.findById(id).orElse(null);
        if (itemsFromDb == null) return null;
        BeanUtils.copyProperties(item, itemsFromDb, "id");
        return repo.save(itemsFromDb);
    }
}
