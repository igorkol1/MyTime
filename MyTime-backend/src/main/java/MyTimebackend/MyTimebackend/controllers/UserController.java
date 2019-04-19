package MyTimebackend.MyTimebackend.controllers;

import MyTimebackend.MyTimebackend.domain.entities.UserEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;

@RestController
@CrossOrigin("http://localhost:4200")
public class UserController {

    @PostMapping("/login")
    public boolean login(@RequestBody UserEntity user){
        //TODO Change it to use data base
        return user.getUserName().equals("user") && user.getPassword().equals("password");
    }

    @RequestMapping("/user")
    public Principal user(HttpServletRequest request){
        String authToken = request.getHeader("Authorization").substring("Basic".length()).trim();
        return () ->new String(Base64.getDecoder().decode(authToken)).split(":")[0];
    }
}
