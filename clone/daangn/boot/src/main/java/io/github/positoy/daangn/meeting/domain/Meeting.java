package io.github.positoy.daangn.meeting.domain;

import io.github.positoy.daangn.location.domain.Location;
import io.github.positoy.daangn.user.domain.User;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
@Entity
public class Meeting {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int meetingID;
    private String name;
    private String description;
    private String image;
    @ManyToMany
    private List<User> participants;
    @Embedded
    private Location location;

    public static Meeting create(MeetingCreateRequest request) {
        Meeting meeting = new Meeting();
        meeting.setName(request.getName());
        meeting.setDescription(request.getDescription());
        meeting.setImage(request.getImage());
        meeting.setLocation(request.getLocation());
        return meeting;
    }

    // Getters and Setters
}