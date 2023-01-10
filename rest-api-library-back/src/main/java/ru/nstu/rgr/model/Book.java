package ru.nstu.rgr.model;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "book")
@Data
public class Book {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "publish_year")
    private int publishYear;

    @Column(name = "publish_place")
    private String publishPlace;

    @ManyToOne
    @JoinColumn(name = "publisher_id", referencedColumnName = "id", nullable = false)
    private Publisher publisherByBook;

    @ManyToMany
    @JoinTable(name="book_rubric",
            joinColumns = {@JoinColumn(name="book_id")},
            inverseJoinColumns = {@JoinColumn(name="rubric_id")})
    private List<Rubric> rubricsByBook = new ArrayList<>();

    @ManyToMany
    @JoinTable(name="book_authors",
            joinColumns = {@JoinColumn(name="book_id")},
            inverseJoinColumns = {@JoinColumn(name="author_id")})
    private List<Author> authorsByBook = new ArrayList<>();

}
