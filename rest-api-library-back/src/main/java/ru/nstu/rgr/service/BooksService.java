package ru.nstu.rgr.service;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import ru.nstu.rgr.model.Book;
import ru.nstu.rgr.model.Reader;
import ru.nstu.rgr.repository.BooksRepository;

@Service
@RequiredArgsConstructor
public class BooksService extends BasePersistentService<Book>{

    @Getter(AccessLevel.PROTECTED)
    private final BooksRepository repo;

    public Book edit(Long id, Book item) {
        if (id == null) {
            return null;
        }
        Book itemsFromDb = repo.findById(id).orElse(null);
        if (itemsFromDb == null) return null;
        BeanUtils.copyProperties(item, itemsFromDb, "id");
        return repo.save(itemsFromDb);
    }

}
