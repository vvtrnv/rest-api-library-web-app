package ru.nstu.rgr.service;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import ru.nstu.rgr.model.Author;
import ru.nstu.rgr.model.Stock;
import ru.nstu.rgr.repository.RubricsRepository;
import ru.nstu.rgr.repository.StockRepository;

@Service
@RequiredArgsConstructor
public class StockService extends BasePersistentService<Stock>{

    @Getter(AccessLevel.PROTECTED)
    private final StockRepository repo;

    public Stock edit(Long id, Stock item){
        if (id == null){
            return null;
        }
        Stock itemsFromDb = repo.findById(id).orElse(null);
        if (itemsFromDb == null) return null;
        BeanUtils.copyProperties(item, itemsFromDb, "id");
        return repo.save(itemsFromDb);
    }
}
