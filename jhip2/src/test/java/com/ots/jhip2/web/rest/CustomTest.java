package com.ots.jhip2.web.rest;

import com.ots.jhip2.Application;
import com.ots.jhip2.domain.Child;
import com.ots.jhip2.repository.ChildRepository;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import static org.hamcrest.Matchers.hasItem;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.util.ReflectionTestUtils;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import org.joda.time.DateTime;
import org.joda.time.DateTimeZone;
import org.joda.time.format.DateTimeFormat;
import org.joda.time.format.DateTimeFormatter;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


/**
 * Test class for the Custom tests of REST controllers.
 *
 * @see ChildResource
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest
public class CustomTest {

    private static final DateTimeFormatter dateTimeFormatter = DateTimeFormat.forPattern("yyyy-MM-dd'T'HH:mm:ss'Z'");

    private static final String DEFAULT_FIRST = "SAMPLE_TEXT";
    private static final String UPDATED_FIRST = "UPDATED_TEXT";
    private static final String DEFAULT_LAST = "SAMPLE_TEXT";
    private static final String UPDATED_LAST = "UPDATED_TEXT";

    private static final DateTime DEFAULT_DOB = new DateTime(0L, DateTimeZone.UTC);
    private static final DateTime UPDATED_DOB = new DateTime(DateTimeZone.UTC).withMillisOfSecond(0);
    private static final String DEFAULT_DOB_STR = dateTimeFormatter.print(DEFAULT_DOB);
    private static final String DEFAULT_SSN = "123-12-1324";
    private static final String UPDATED_SSN = "UPDATED_TEXT";

    private static final Integer DEFAULT_CASEFK = 1;
    private static final Integer UPDATED_CASEFK = 2;

    @Inject
    private ChildRepository childRepository;

    @Inject
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Inject
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    private MockMvc restChildMockMvc;

    private Child child;

    @PostConstruct
    public void setup() {
        MockitoAnnotations.initMocks(this);
        ChildResource childResource = new ChildResource();
        ReflectionTestUtils.setField(childResource, "childRepository", childRepository);
        this.restChildMockMvc = MockMvcBuilders.standaloneSetup(childResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setMessageConverters(jacksonMessageConverter).build();
    }

    @Before
    public void initTest() {
        child = new Child();
        child.setFirst(DEFAULT_FIRST);
        child.setLast(DEFAULT_LAST);
        child.setDob(DEFAULT_DOB);
        child.setSsn(DEFAULT_SSN);
        child.setCasefk(DEFAULT_CASEFK);
    }

    @Test
    @Transactional
    public void createChildWithGoodSSN() throws Exception {
        int databaseSizeBeforeCreate = childRepository.findAll().size();

        // Create the Child with a valid SSN

        restChildMockMvc.perform(post("/api/childs")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(child)))
                .andExpect(status().isCreated());

        // Validate the Child in the database
        List<Child> childs = childRepository.findAll();
        assertThat(childs).hasSize(databaseSizeBeforeCreate + 1);
        Child testChild = childs.get(childs.size() - 1);
        assertThat(testChild.getFirst()).isEqualTo(DEFAULT_FIRST);
        assertThat(testChild.getLast()).isEqualTo(DEFAULT_LAST);
        assertThat(testChild.getDob().toDateTime(DateTimeZone.UTC)).isEqualTo(DEFAULT_DOB);
        assertThat(testChild.getSsn()).isEqualTo(DEFAULT_SSN);
        assertThat(testChild.getCasefk()).isEqualTo(DEFAULT_CASEFK);
    }
    /* (RMT-12/22/2015) This test will fail until SSN edits are added
    @Test
    @Transactional
    public void createChildWithBadSSN() throws Exception {
        int databaseSizeBeforeCreate = childRepository.findAll().size();

        // Create the Child with a valid SSN
        
        child.setSsn("abcd");

        restChildMockMvc.perform(post("/api/childs")
                .contentType(TestUtil.APPLICATION_JSON_UTF8)
                .content(TestUtil.convertObjectToJsonBytes(child)))
                .andExpect(status().isBadRequest());
    }
    */
    
}