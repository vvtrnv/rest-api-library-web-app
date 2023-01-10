package ru.nstu.rgr.model;

import lombok.Data;

import javax.persistence.*;
import java.sql.Date;
import java.util.*;

@Entity
@Table(name = "reader")
@Data
public class Reader {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;

    @Column(name = "library_card")
    private String libraryCard;

    @Column(name = "name")
    private String name;

    @Column(name = "middlename")
    private String middlename;

    @Column(name = "lastname")
    private String lastname;

    @Column(name = "phone")
    private String phone;

    @Column(name = "address")
    private String address;

    @Column(name = "date_reg")
    private Date dateReg;

    @Column(name = "date_rereg")
    private Date dateRereg;

    @ManyToMany
    @JoinTable(name="reader_books",
            joinColumns = {@JoinColumn(name="reader_id")},
            inverseJoinColumns = {@JoinColumn(name="inventory_id")})
    private List<Stock> booksByReader = new ArrayList<>();
}
