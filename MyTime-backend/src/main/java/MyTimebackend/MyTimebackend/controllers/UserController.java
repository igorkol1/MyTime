package MyTimebackend.MyTimebackend.controllers;

import MyTimebackend.MyTimebackend.domain.entities.UserEntity;
import MyTimebackend.MyTimebackend.domain.reporitories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;

@RestController
@CrossOrigin("http://localhost:4200")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/login")
    public boolean login(@RequestBody UserEntity user) {
        UserEntity tempUser = userRepository.findByUserName(user.getUserName());
        if (tempUser != null) {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(10);
            return encoder.matches(user.getPassword(), tempUser.getPassword());
        }
        return false;
    }

    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization").substring("Basic".length()).trim();
        return () -> new String(Base64.getDecoder().decode(authToken)).split(":")[0];
    }
}
