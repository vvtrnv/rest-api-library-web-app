package ru.nstu.rgr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.nstu.rgr.model.Author;
import ru.nstu.rgr.model.Book;

@Repository
public interface AuthorsRepository extends JpaRepository<Author, Long> {
}
