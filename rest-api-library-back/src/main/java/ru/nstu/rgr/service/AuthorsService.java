package ru.nstu.rgr.service;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import ru.nstu.rgr.model.Author;
import ru.nstu.rgr.model.Book;
import ru.nstu.rgr.repository.AuthorsRepository;

@Service
@RequiredArgsConstructor
public class AuthorsService extends BasePersistentService<Author>{

    @Getter(AccessLevel.PROTECTED)
    private final AuthorsRepository repo;

    public Author edit(Long id, Author item) {
        if (id == null) {
            return null;
        }
        Author itemFromDb = repo.findById(id).orElse(null);
        if (itemFromDb == null) return null;
        BeanUtils.copyProperties(item, itemFromDb, "id");
        return repo.save(itemFromDb);
    }
}
