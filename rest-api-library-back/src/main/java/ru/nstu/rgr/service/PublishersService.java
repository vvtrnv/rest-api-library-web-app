package ru.nstu.rgr.service;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import ru.nstu.rgr.model.Publisher;
import ru.nstu.rgr.repository.PublishersRepository;

@Service
@RequiredArgsConstructor
public class PublishersService extends BasePersistentService<Publisher>{

    @Getter(AccessLevel.PROTECTED)
    private final PublishersRepository repo;

    public Publisher edit(Long id, Publisher item){
        if (id == null){
            return null;
        }
        Publisher itemsFromDb = repo.findById(id).orElse(null);
        if (itemsFromDb == null) return null;
        BeanUtils.copyProperties(item, itemsFromDb, "id");
        return repo.save(itemsFromDb);
    }
}
