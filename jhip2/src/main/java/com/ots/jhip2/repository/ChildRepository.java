package com.ots.jhip2.repository;

import com.ots.jhip2.domain.Child;
import com.ots.jhip2.domain.User;

import org.joda.time.DateTime;
import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Child entity.
 */
public interface ChildRepository extends JpaRepository<Child,Long> {
	List<Child> findAllByCwcase(Long cwcase);
}
