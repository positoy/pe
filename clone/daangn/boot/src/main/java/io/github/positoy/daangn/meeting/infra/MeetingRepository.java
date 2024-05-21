package io.github.positoy.daangn.meeting.infra;

import io.github.positoy.daangn.meeting.domain.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MeetingRepository extends JpaRepository<Meeting, Integer> {
}