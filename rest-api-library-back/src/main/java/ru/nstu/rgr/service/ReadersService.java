package ru.nstu.rgr.service;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import ru.nstu.rgr.model.Reader;
import ru.nstu.rgr.repository.ReadersRepository;

@Service
@RequiredArgsConstructor
public class ReadersService extends BasePersistentService<Reader> {

    @Getter(AccessLevel.PROTECTED)
    private final ReadersRepository repo;

    public Reader edit(Long id, Reader item){
        if (id == null){
            return null;
        }
        Reader itemsFromDb = repo.findById(id).orElse(null);
        if (itemsFromDb == null) return null;
        BeanUtils.copyProperties(item, itemsFromDb, "id");
        return repo.save(itemsFromDb);
    }
}
