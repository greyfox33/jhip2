package com.ots.jhip2.repository;

import com.ots.jhip2.domain.Cwcase;
import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Cwcase entity.
 */
public interface CwcaseRepository extends JpaRepository<Cwcase,Long> {

}
